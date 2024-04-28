<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Exception;
use App\Models\Invoice;
use App\Models\Customer;
use App\Models\Material;
use App\Models\Stock;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    // public function store(Request $request)
    // {

    //     DB::beginTransaction();
    //     try {
    //         $customer_name = $request->input('customer_name');
    //         $customer_phone = $request->input('customer_phone');
    //         $customer_address = $request->input('customer_address');

    //         $dress_type = $request->input('dress_type') ?? "";
    //         $button_type = $request->input('button_type') ?? "";
    //         $neck_type = $request->input('neck_type') ?? "";
    //         $pocket_type = $request->input('pocket_type') ?? "";
    //         $hand_type = $request->input('hand_type') ?? "";

    //         $material_id = $request->input('material_id');
    //         $chest_length = $request->input('chest_length');
    //         $sleeve_length = $request->input('sleeve_length');
    //         $neck_length = $request->input('neck_length');
    //         $cuff_length = $request->input('cuff_length');
    //         $hand_length = $request->input('hand_length');
    //         $shoulder_length = $request->input('shoulder_length');
    //         $dress_length = $request->input('dress_length');
    //         $material_length = $request->input('material_length');
    //         $sale_price = $request->input('sale_price');
    //         $total = $request->input("total");
    //         $discount = $request->input('discount') ?? "";
    //         $vat = $request->input('vat') ?? "";
    //         $payable = $request->input("payable");
    //         $advance = $request->input('advance') ?? "";
    //         $due = $request->input("due");
    //         $deadline_date = $request->input('deadline_date');
    //         $note = $request->input('note') ?? "";

    //         //___ Process Image start ___//
    //         $img = $request->input('image');
    //         $imgName = $customer_name . "_" . md5(time()) . ".png";
    //         $source = fopen($img, "r");
    //         $destination = fopen("images/ScreenShoot/" . $imgName, "w");
    //         stream_copy_to_stream($source, $destination);
    //         fclose($source);
    //         fclose($destination);
    //         //___ Process Image end ___//

    //         $customer = Customer::updateOrCreate(
    //             ['name' => $customer_name, 'phone' => $customer_phone, 'address' => $customer_address], // Criteria to find the record
    //             ['name' => $customer_name, 'phone' => $customer_phone, 'address' => $customer_address] // Data to update or create
    //         );

    //         if ($customer) {
    //             $customer_id = $customer->id;          

    //             $invoice = Invoice::create([
    //                 'customer_id' => $customer_id,
    //                 'image' => $imgName,

    //                 'dress_type' => $dress_type,
    //                 'button_type' => $button_type,
    //                 'neck_type' => $neck_type,
    //                 'pocket_type' => $pocket_type,
    //                 'hand_type' => $hand_type,

    //                 'material_id' => $material_id,
    //                 'chest_length' => $chest_length,
    //                 'sleeve_length' => $sleeve_length,
    //                 'neck_length' => $neck_length,
    //                 'cuff_length' => $cuff_length,
    //                 'hand_length' => $hand_length,
    //                 'shoulder_length' => $shoulder_length,
    //                 'dress_length' => $dress_length,
    //                 'material_length' => $material_length,
    //                 'sale_price' => $sale_price,
    //                 'total' => $total,
    //                 'discount' => $discount,
    //                 'vat' => $vat,
    //                 'payable' => $payable,
    //                 'advance' => $advance,
    //                 'due' => $due,
    //                 'deadline_date' => $deadline_date,
    //                 'note'=> $note
    //             ]);


    //             if ($invoice) {

    //                 $material = Material::where('id', '=', $material_id)->first();

    //                 if ($material) {

    //                     $oldStock = $material->stock;
    //                     if ($oldStock > 0) {
    //                         $newStock = $oldStock - $material_length;

    //                         if ($newStock >= 0) {

    //                             Material::where('id', '=', $material_id)->update([
    //                                 'stock' => $newStock
    //                             ]);
    //                         }
    //                     }
    //                 }
    //             }
    //         }

    //         DB::commit();
    //         return 'success';
    //     } catch (Exception $e) {
    //         DB::rollBack();
    //         return 'failed';
    //     }
    // }

    public function store(Request $request)
    {

        DB::beginTransaction();
        try {
            $customer_name = $request->input('customer_name');
            $customer_phone = $request->input('customer_phone');
            $customer_address = $request->input('customer_address');

            $dress_type = $request->input('dress_type') ?? "";
            $button_type = $request->input('button_type') ?? "";
            $neck_type = $request->input('neck_type') ?? "";
            $pocket_type = $request->input('pocket_type') ?? "";
            $hand_type = $request->input('hand_type') ?? "";

            $material_id = $request->input('material_id');
            $material_id_2 = $request->input('material_id_2');
            $material_id_3 = $request->input('material_id_3');
            $material_id_4 = $request->input('material_id_4');

            $chest_length = $request->input('chest_length');
            $sleeve_length = $request->input('sleeve_length');
            $neck_length = $request->input('neck_length');
            $cuff_length = $request->input('cuff_length');
            $hand_length = $request->input('hand_length');
            $shoulder_length = $request->input('shoulder_length');
            $dress_length = $request->input('dress_length');

            $material_length = $request->input('material_length');
            $material_length_2 = $request->input('material_length_2');
            $material_length_3 = $request->input('material_length_3');
            $material_length_4 = $request->input('material_length_4');

            $sale_price = $request->input('sale_price');
            $total = $request->input("total");
            $discount = $request->input('discount') ?? "";
            $vat = $request->input('vat') ?? "";
            $payable = $request->input("payable");
            $advance = $request->input('advance') ?? "";
            $due = $request->input("due");
            $deadline_date = $request->input('deadline_date');
            $note = $request->input('note') ?? "";

            //___ Process Image start ___//
            $img = $request->input('image');
            $imgName = $customer_name . "_" . md5(time()) . ".png";
            $source = fopen($img, "r");
            $destination = fopen("images/ScreenShoot/" . $imgName, "w");
            stream_copy_to_stream($source, $destination);
            fclose($source);
            fclose($destination);
            //___ Process Image end ___//

            $customer = Customer::updateOrCreate(
                ['name' => $customer_name, 'phone' => $customer_phone, 'address' => $customer_address], // Criteria to find the record
                ['name' => $customer_name, 'phone' => $customer_phone, 'address' => $customer_address] // Data to update or create
            );
            //dd($material_id_2);
            if ($customer) {
                $customer_id = $customer->id;

                $invoice = Invoice::create([
                    'customer_id' => $customer_id,
                    'image' => $imgName,

                    'dress_type' => $dress_type,
                    'button_type' => $button_type,
                    'neck_type' => $neck_type,
                    'pocket_type' => $pocket_type,
                    'hand_type' => $hand_type,

                    'material_id' => $material_id,
                    'material_id_2' => $material_id_2,
                    'material_id_3' => $material_id_3,
                    'material_id_4' => $material_id_4,

                    'chest_length' => $chest_length,
                    'sleeve_length' => $sleeve_length,
                    'neck_length' => $neck_length,
                    'cuff_length' => $cuff_length,
                    'hand_length' => $hand_length,
                    'shoulder_length' => $shoulder_length,
                    'dress_length' => $dress_length,
                    'material_length' => $material_length,
                    'material_length_2' => $material_length_2,
                    'material_length_3' => $material_length_3,
                    'material_length_4' => $material_length_4,

                    'sale_price' => $sale_price,
                    'total' => $total,
                    'discount' => $discount,
                    'vat' => $vat,
                    'payable' => $payable,
                    'advance' => $advance,
                    'due' => $due,
                    'deadline_date' => $deadline_date,
                    'note' => $note
                ]);


                if ($invoice) {

                    $material = Material::where('id', '=', $material_id)->first();
                    $material_2 = Material::where('id', '=', $material_id_2)->first();
                    $material_3 = Material::where('id', '=', $material_id_3)->first();
                    $material_4 = Material::where('id', '=', $material_id_4)->first();

                    if ($material !== NULL) {
                        $oldStock = $material->stock;
                        if ($oldStock > 0) {
                            $newStock = $oldStock - $material_length;
                            if ($newStock >= 0) {
                                Material::where('id', '=', $material_id)->update([
                                    'stock' => $newStock
                                ]);
                            }
                        }
                    }

                    if ($material_2 !== NULL) {
                        $oldStock_2 = $material_2->stock;
                        if ($oldStock_2 > 0) {
                            $newStock_2 = $oldStock_2 - $material_length_2;
                            if ($newStock_2 >= 0) {
                                Material::where('id', '=', $material_id_2)->update([
                                    'stock' => $newStock_2
                                ]);
                            }
                        }
                    }

                    if ($material_3 !== NULL) {
                        $oldStock_3 = $material_3->stock;
                        if ($oldStock_3 > 0) {
                            $newStock_3 = $oldStock_3 - $material_length_3;
                            if ($newStock_3 >= 0) {
                                Material::where('id', '=', $material_id_3)->update([
                                    'stock' => $newStock_3
                                ]);
                            }
                        }
                    }

                    if ($material_4 !== NULL) {
                        $oldStock_4 = $material_4->stock;
                        if ($oldStock_4 > 0) {
                            $newStock_4 = $oldStock_4 - $material_length_4;
                            if ($newStock_4 >= 0) {
                                Material::where('id', '=', $material_id_4)->update([
                                    'stock' => $newStock_4
                                ]);
                            }
                        }
                    }
                }
            }

            DB::commit();
            return 'success';
        } catch (Exception $e) {
            DB::rollBack();
            return $e;
        }
    }

    public function GetMaterial()
    {
        $materials = Material::select("id", "name")->get();
        // return view('pages.home', compact('materials'));
        return $materials;
    }

    public function orderDetails(Request $request)
    {
        $invoice = Invoice::where('id', '=', $request->id)->with('customer', 'material:id,name')->first();
        return $invoice;
    }

    public function pendingOrders()
    {
        $pendingOrders = Invoice::where('status', '=', 'pending')->select("id", "customer_id", "payable", "due")->with('customer:id,name,phone')->get();

        return $pendingOrders;
    }

    // Cancell orders
    // public function cancel(Request $request)
    // {
    //     DB::beginTransaction();
    //     try {
    //         $invoice = Invoice::where('id', '=', $request->id)->first();

    //         $material = Material::where('id', '=', $invoice->material_id)->first();

    //         if ($material) {

    //             $oldStock = $material->stock;
    //             $newStock = $oldStock + $invoice->material_length;

    //             Material::where('id', '=', $invoice->material_id)->update([
    //                 'stock' => $newStock
    //             ]);
    //         }


    //         Invoice::where('id', '=', $request->id)->update([
    //             'status' => 'cancel',
    //             'advance' => 0,

    //         ]);
    //         DB::commit();
    //         return 'success';
    //     } catch (Exception $e) {
    //         DB::rollBack();
    //         return 'failed';
    //     }
    // }

    public function cancel(Request $request)
    {
        DB::beginTransaction();
        try {
            $invoice = Invoice::where('id', '=', $request->id)->first();

            $material = Material::where('id', '=', $invoice->material_id)->first();
            $material_2 = Material::where('id', '=', $invoice->material_id_2)->first();
            $material_3 = Material::where('id', '=', $invoice->material_id_3)->first();
            $material_4 = Material::where('id', '=', $invoice->material_id_4)->first();

            if ($material !== NULL ) {
                $oldStock = $material->stock;
                $newStock = $oldStock + $invoice->material_length;
                Material::where('id', '=', $invoice->material_id)->update([
                    'stock' => $newStock
                ]);
            }

            if ($material_2 !== NULL ) {
                $oldStock_2 = $material_2->stock;
                $newStock_2 = $oldStock_2 + $invoice->material_length_2;
                Material::where('id', '=', $invoice->material_id_2)->update([
                    'stock' => $newStock_2
                ]);
            }

            if ($material_3 !== NULL ) {
                $oldStock_3 = $material_3->stock;
                $newStock_3 = $oldStock_3 + $invoice->material_length_3;
                Material::where('id', '=', $invoice->material_id_3)->update([
                    'stock' => $newStock_3
                ]);
            }

            if ($material_4 !== NULL ) {
                $oldStock_4 = $material_4->stock;
                $newStock_4 = $oldStock_4 + $invoice->material_length_4;
                Material::where('id', '=', $invoice->material_id_4)->update([
                    'stock' => $newStock_4
                ]);
            }


            Invoice::where('id', '=', $request->id)->update([
                'status' => 'cancel',
                'advance' => 0,

            ]);
            DB::commit();
            return 'success';
        } catch (Exception $e) {
            DB::rollBack();
            return 'failed';
        }
    }



    // Complete orders
    public function completePendingOrders(Request $request)
    {
        $id = $request->input('id');
        Invoice::where('id', '=', $id)->update([
            'status' => 'complete'
        ]);
        return 1;
    }

    // View completed orders
    public function completeOrders()
    {
        $completeOrders = Invoice::where('status', '=', 'complete')->select("id", "customer_id", "payable", "due")->with('customer:id,name,phone')->get();

        return $completeOrders;
    }

    public function updateCompleteOrder(Request $request)
    {

        $invoice_id = $request->id;
        $collection = $request->collection;
        $deliveryDate = $request->delivery_date;

        $invoice = Invoice::where('id', '=', $invoice_id)->first();
        if ($invoice) {

            $netOutstanding = $invoice->due - $collection;

            Invoice::where('id', '=', $invoice_id)->update([
                'collection' => $collection,
                'net_outstanding' => $netOutstanding,
                'status' => 'delivery',
                'delivery_date' => $deliveryDate
            ]);
        }

        return 'sucess';
    }

    // Delivered order (for history page)
    public function deliveryOrders()
    {
        $deliveryOrders = Invoice::where('status', '=', 'delivery')->select("id", "customer_id", "collection", "net_outstanding", "advance")->with('customer:id,name,phone')->get();

        // $deliveryOrders = Invoice::where('status', '=', 'delivery')->get();

        return $deliveryOrders;
    }

    // Statistics
    public function statisticSold()
    {

        // Query to get total sales per day
        $currentDate = now()->toDateString();

        $advanceDay = Invoice::whereDate('created_at', $currentDate)->sum('advance');
        $collectionDay = Invoice::whereDate('delivery_date', $currentDate)->sum('collection');

        $currentDay = $advanceDay + $collectionDay;

        // Query to get total sales per week

        $startOfWeek = now()->startOfWeek()->toDateString();
        $endOfWeek = now()->endOfWeek()->toDateString();


        $advanceWeek = Invoice::whereBetween('created_at', [$startOfWeek, $endOfWeek])->sum('advance');
        $collectionWeek = Invoice::whereBetween('delivery_date', [$startOfWeek, $endOfWeek])->sum('collection');

        $currentWeek = $advanceWeek + $collectionWeek;


        // Query to get total sales per month
        $currentMonthStart = now()->startOfMonth()->toDateString();
        $currentMonthEnd = now()->endOfMonth()->toDateString();

        $advanceMonth = Invoice::whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])->sum('advance');
        $collectionMonth = Invoice::whereBetween('delivery_date', [$currentMonthStart, $currentMonthEnd])->sum('collection');

        $currentMonth = $advanceMonth + $collectionMonth;

        // Query to get total sales per year
        $currentYearStart = now()->startOfYear()->toDateString();
        $currentYearEnd = now()->endOfYear()->toDateString();

        $advanceYear = Invoice::whereBetween('created_at', [$currentYearStart, $currentYearEnd])->sum('advance');
        $collectionYear = Invoice::whereBetween('delivery_date', [$currentYearStart, $currentYearEnd])->sum('collection');

        $currentYear = $advanceYear + $collectionYear;

        $statistic = array($currentDay, $currentWeek, $currentMonth, $currentYear);
        return $statistic;
    }

    public function statisticBuy()
    {
        // Query to get total sales per day
        $currentDate = now()->toDateString();

        $buyDay = Stock::whereDate('created_at', $currentDate)
            ->get()
            ->sum(function ($item) {
                return $item->stock * $item->price;
            });

        // Query to get total sales per week

        $startOfWeek = now()->startOfWeek()->toDateString();
        $endOfWeek = now()->endOfWeek()->toDateString();

        $buyWeek = Stock::whereBetween('created_at', [$startOfWeek, $endOfWeek])
            ->get()
            ->sum(function ($item) {
                return $item->stock * $item->price;
            });


        // Query to get total sales per month
        $currentMonthStart = now()->startOfMonth()->toDateString();
        $currentMonthEnd = now()->endOfMonth()->toDateString();

        $buyMonth = Stock::whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->get()
            ->sum(function ($item) {
                return $item->stock * $item->price;
            });

        // Query to get total sales per year
        $currentYearStart = now()->startOfYear()->toDateString();
        $currentYearEnd = now()->endOfYear()->toDateString();

        $buyYear = Stock::whereBetween('created_at', [$currentYearStart, $currentYearEnd])
            ->get()
            ->sum(function ($item) {
                return $item->stock * $item->price;
            });

        $statisticBuy = array($buyDay, $buyWeek, $buyMonth, $buyYear);
        return $statisticBuy;
    }

    public function balance()
    {
        // Get total sales and total purchases
        $totalSales = $this->statisticSold();
        $totalPurchases = $this->statisticBuy();

        // Calculate balance
        $balanceDay = $totalSales[0] - $totalPurchases[0];
        $balanceWeek = $totalSales[1] - $totalPurchases[1];
        $balanceMonth = $totalSales[2] - $totalPurchases[2];
        $balanceYear = $totalSales[3] - $totalPurchases[3];


        $balance = array($balanceDay, $balanceWeek, $balanceMonth, $balanceYear);
        return $balance;
    }

    public function Login(Request $request)
    {
        $email = $request->input("email");
        $password = $request->input("password");
        $status = 1;

        $staticEmail = "test@mail.com";
        $staticPassword = "test";

        if ($email === $staticEmail && $password === $staticPassword) {
            $data = array($email, $password, $status);
            return $data;
        } else {
            return "Invalid user";
        }
    }

}
