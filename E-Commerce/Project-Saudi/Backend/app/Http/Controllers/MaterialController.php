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
        $materials = Material::all();
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
            return redirect('home');
        } catch (Exception $e) {
            DB::rollBack();
            return redirect('home');
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
            // return redirect('home');
            return "success";
        } catch (Exception $e) {
            DB::rollBack();
            // return redirect('home');
            return "success";
        }
    }

    // price
    public function price(Request $request)
    {
        $material = Material::select("price")->where("id","=",$request->id);
        // return view('pages.material.priceMaterial', compact('material'));
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
            // return redirect('home');
            return "Material added";
        } catch (Exception $e) {
            DB::rollBack();
            // return redirect('home');
            return "failed";
        }
    }
}
