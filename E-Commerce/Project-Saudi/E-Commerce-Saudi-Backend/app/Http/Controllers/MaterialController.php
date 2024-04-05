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
            return redirect('home');
        } catch (Exception $e) {
            DB::rollBack();
            return redirect('home');
        }
    }
}
