<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Exception;
use App\Models\Invoice;
use App\Models\Customer;
use App\Models\Material;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    public function store(Request $request)
    {

        DB::beginTransaction();
        try {

            $img = $request->input('image');

            // For not replace image
            $imgName = "Captured_" . md5(time()) . ".png";

            // For replace image
            // $imgName = "Captured".".png";
            
            $source = fopen($img, "r");
            $destination = fopen("images/ScreenShoot/" . $imgName, "w");
            stream_copy_to_stream($source, $destination);
            fclose($source);
            fclose($destination);

            $customer_name = $request->input('customer_name');
            $customer_phone = $request->input('customer_phone');
            $customer_address = $request->input('customer_address');

            $button_type = $request->input('button_type') ?? "";
            $neck_type = $request->input('neck_type') ?? "";
            $pocket_type = $request->input('pocket_type') ?? "";
            $hand_type = $request->input('hand_type') ?? "";

            $material_id = $request->input('material_id');
            $chest_length = $request->input('chest_length');
            $sleeve_length = $request->input('sleeve_length');
            $neck_length = $request->input('neck_length');
            $cuff_length = $request->input('cuff_length');
            $hand_length = $request->input('hand_length');
            $shoulder_length = $request->input('shoulder_length');
            $dress_length = $request->input('dress_length');
            $material_length = $request->input('material_length');
            $sale_price = $request->input('sale_price');
            $total = $material_length * $sale_price;
            $discount = $request->input('discount');
            $vat = $request->input('vat');
            $payable = ($total + $vat) - $discount;
            $advance = $request->input('advance');
            $due = $payable - $advance;
            $deadline_date = $request->input('deadline_date');
            $inqueries_number = $request->input('inqueries_number') ?? "";
            $note = $request->input('note') ?? "";

            $customer = Customer::updateOrCreate(
                ['name' => $customer_name, 'phone' => $customer_phone, 'address' => $customer_address], // Criteria to find the record
                ['name' => $customer_name, 'phone' => $customer_phone, 'address' => $customer_address] // Data to update or create
            );           

            if ($customer) {
                $customer_id = $customer->id;          

                $invoice = Invoice::create([
                    'customer_id' => $customer_id,
                    'image' => $imgName,

                    'button_type' => $button_type,
                    'neck_type' => $neck_type,
                    'pocket_type' => $pocket_type,
                    'hand_type' => $hand_type,
                    
                    'material_id' => $material_id,
                    'chest_length' => $chest_length,
                    'sleeve_length' => $sleeve_length,
                    'neck_length' => $neck_length,
                    'cuff_length' => $cuff_length,
                    'hand_length' => $hand_length,
                    'shoulder_length' => $shoulder_length,
                    'dress_length' => $dress_length,
                    'material_length' => $material_length,
                    'sale_price' => $sale_price,
                    'total' => $total,
                    'discount' => $discount,
                    'vat' => $vat,
                    'payable' => $payable,
                    'advance' => $advance,
                    'due' => $due,
                    'deadline_date' => $deadline_date,
                    'inqueries_number' => $inqueries_number,
                    'note'=> $note
                ]);
                

                if ($invoice) {

                    $material = Material::where('id', '=', $material_id)->first();

                    if ($material) {

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
                }
            }

            DB::commit();
            return 'success';
        } catch (Exception $e) {
            DB::rollBack();
            return 'failed';
        }
    }

    public function GetMaterial()
    {
        $materials = Material::select("id","name")->get();
        // return view('pages.home', compact('materials'));
        return $materials;
    }

    public function orderDetails(Request $request)
    {
        $invoice = Invoice::where('id', '=', $request->id)->with('customer','material')->first();
        return $invoice;
    }

    public function pendingOrders()
    {
        $pendingOrders = Invoice::where('status', '=', 'pending')->get();

        return $pendingOrders;
    }

}
