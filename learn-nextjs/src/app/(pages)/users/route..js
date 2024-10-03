import { NextResponse } from "next/server";

export function GET(request) {
  const data = [
    { id: 1, name: "Al jubair shovon", dept: "Computer" },
    { id: 2, name: "Asikur rahman", dept: "Electrical" },
    { id: 3, name: "Md joni babu", dept: "Electronics" },
  ];
  return NextResponse.json(data);
}

export function POST() {}

export function DELETE() {}

export function PUT() {}
