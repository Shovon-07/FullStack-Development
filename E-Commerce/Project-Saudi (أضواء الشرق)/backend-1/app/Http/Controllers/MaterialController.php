<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\Deduct;
use App\Models\Stock;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function index()
    {
        $materials = Material::where('id','>','1')->get();
        return $materials;
    }

    // Update stock data
    public function updateStock(Request $request)
    {
        DB::beginTransaction();
        try {
            $material = Material::where('id', '=', $request->id)->first();            
            $oldStock = $material->stock;
            $newStock = $oldStock + $request->stock;
            //dd($newStock);
            if ($material) {
                
                $updateStock = Material::where('id', '=', $request->id)->update([
                    'stock' => $newStock,
                    "price" => $request->price
                ]);
                if ($updateStock) {
                    Stock::create([
                        'material_id' => $material->id,
                        'stock' => $request->stock,
                        'price' => $request->price,
                    ]);
                }
            }
            DB::commit();
            return "success";
        } catch (Exception $e) {
            DB::rollBack();
            return "failed";
        }
    }

    // update deduct
    public function updateDeduct(Request $request)
    {
        DB::beginTransaction();
        try {
            $material = Material::where('id', '=', $request->id)->first();

            if ($material) {

                $oldStock = $material->stock;
                if ($oldStock > 0) {
                    $newStock = $oldStock - $request->deduct;

                    if ($newStock >= 0) {

                        $updateStock = Material::where('id', '=', $request->id)->update([
                            'stock' => $newStock
                        ]);

                        if ($updateStock) {
                            $deduct = Deduct::create([
                                'material_id' => $material->id,
                                'deduct' => $request->deduct,
                            ]);
                        }
                    }
                }
            }
            DB::commit();
            return "success";
        } catch (Exception $e) {
            DB::rollBack();
            return "failed";
        }
    }

    // price
    public function price(Request $request)
    {
        $material = Material::select("price")->where("id","=",$request->id);
        return $material;
    }

    public function updatePrice(Request $request)
    {
        Material::where('id', '=', $request->id)->update([
            'price' => $request->price
        ]);
        return "success";
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $material = Material::create([
                'name' => $request->name,
                'stock' => $request->stock,
                'price' => $request->price
            ]);
            if ($material) {
                Stock::create([
                    'material_id' => $material->id,
                    'stock' => $request->stock,
                    'price' => $request->price
                ]);
            }
            DB::commit();
            return "success";
        } catch (Exception $e) {
            DB::rollBack();
            return "failed";
        }
    }
}
