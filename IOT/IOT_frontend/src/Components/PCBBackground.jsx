import React, { useEffect, useRef } from 'react';

const PCBBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // স্ক্রিনের সাইজ অনুযায়ী ক্যানভাস অ্যাডজাস্ট করা
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const maxLines = 50; // একসাথে স্ক্রিনে কয়টি লাইন থাকবে
    const lines = [];

    class PCBLine {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.points = [{ x: this.x, y: this.y }];
        
        let currentX = this.x;
        let currentY = this.y;
        const segments = Math.floor(Math.random() * 3) + 2; // ২ থেকে ৪টি বাঁক

        for (let i = 0; i < segments; i++) {
          const length = Math.random() * 100 + 60;
          const direction = Math.floor(Math.random() * 4); // ৯০ ডিগ্রি অ্যাঙ্গেল ডিরেকশন
          
          if (direction === 0) currentX += length;
          else if (direction === 1) currentX -= length;
          else if (direction === 2) currentY += length;
          else if (direction === 3) currentY -= length;

          this.points.push({ x: currentX, y: currentY });
        }

        this.progress = 0;
        // this.speed = Math.random() * 0.015 + 0.008; // সিগন্যাল স্পিড
        this.speed = Math.random() * 0.001 + 0.0008;
        this.signalColor = `hsl(${Math.random() * 40 + 190}, 100%, 70%)`; // সায়ান/ব্লু গ্লো
      }

      draw() {
        if (this.points.length < 2) return;

        // ১. হালকা ব্যাকগ্রাউন্ড ট্র্যাক লাইন
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        // ctx.strokeStyle = 'rgba(139, 185, 255, 0.04)';
        ctx.strokeStyle = 'rgba(139, 185, 255, 0.16)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // ২. স্টাটিং নোড পয়েন্ট
        ctx.beginPath();
        ctx.arc(this.points[0].x, this.points[0].y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 185, 255, 0.15)';
        ctx.fill();

        // ৩. সিগন্যাল পালস ক্যালকুলেশন
        const totalSegments = this.points.length - 1;
        const currentSegmentProgress = this.progress * totalSegments;
        const segmentIndex = Math.floor(currentSegmentProgress);
        
        if (segmentIndex >= totalSegments) {
          this.reset();
          return;
        }

        const segPercent = currentSegmentProgress - segmentIndex;
        const p1 = this.points[segmentIndex];
        const p2 = this.points[segmentIndex + 1];

        const signalX = p1.x + (p2.x - p1.x) * segPercent;
        const signalY = p1.y + (p2.y - p1.y) * segPercent;

        // গ্লোয়িং সিগন্যাল ড্রয়িং
        ctx.beginPath();
        ctx.arc(signalX, signalY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.signalColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.signalColor;
        ctx.fill();
        ctx.shadowBlur = 0; // পারফর্ম্যান্স ঠিক রাখতে শ্যাডো রিসেট

        this.progress += this.speed;
      }
    }

    // প্রাথমিক লাইন তৈরি
    for (let i = 0; i < maxLines; i++) {
      lines.push(new PCBLine());
    }

    // অ্যানিমেশন লুপ
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach(line => line.draw());
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Component unmount হলে মেমোরি লিক বন্ধ করতে ক্লিনআপ
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ইনলাইন স্টাইল দিয়ে ক্যানভাসটিকে ব্যাকগ্রাউন্ডে ফিক্সড করা হয়েছে
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default PCBBackground;