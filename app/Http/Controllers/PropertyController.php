<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $property = property::all();
        return response()->json($property);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate request data
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'location' => 'required|string|max:255',
            'bedrooms' => 'required|integer',
            'bathrooms' => 'required|integer',
            'area' => 'required|integer',
            'property_type' => 'required|string|max:255',
            'listing_status' => 'required|string|max:255',
            'condition' => 'nullable|string|max:255',
            'year_built' => 'nullable|integer',
            'lot_size' => 'nullable|integer',
            'lot_size_unit' => 'nullable|string|max:255',
            'living_area' => 'nullable|integer',
            'parking_spaces' => 'nullable|integer',
            'parking_type' => 'nullable|string|max:255',
            'garage_spaces' => 'nullable|integer',
            'basement' => 'nullable|boolean',
            'basement_finished' => 'nullable|boolean',
            'basement_type' => 'nullable|string|max:255',
            'roof_type' => 'nullable|string|max:255',
            'exterior_material' => 'nullable|string|max:255',
            'foundation' => 'nullable|string|max:255',
            'heating_type' => 'nullable|string|max:255',
            'cooling_type' => 'nullable|string|max:255',
            'fuel_type' => 'nullable|string|max:255',
            'water_source' => 'nullable|string|max:255',
            'sewer_type' => 'nullable|string|max:255',
            'electric_service' => 'nullable|string|max:255',
            'flooring' => 'nullable|string|max:255',
            'stories' => 'nullable|integer',
            'property_view' => 'nullable|string|max:255',
            'zoning' => 'nullable|string|max:255',
            'neighborhood' => 'nullable|string|max:255',
            'school_district' => 'nullable|string|max:255',
            'property_tax' => 'nullable|numeric',
            'tax_year' => 'nullable|integer',
            'hoa_fee' => 'nullable|numeric',
            'hoa_fee_period' => 'nullable|string|max:255',
            'hoa_transfer_fee' => 'nullable|numeric',
            'pets_allowed' => 'nullable|boolean',
            'furnished' => 'nullable|boolean',
            'appliances_included' => 'nullable|array',
            'features' => 'nullable|array',
            'images' => 'nullable|array',
            'mls_number' => 'nullable|string|max:255',
            'days_on_market' => 'nullable|integer',
            'available_from' => 'nullable|date',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'energy_rating' => 'nullable|string|max:255',
            'seller_disclosure' => 'nullable|string',
            'additional_notes' => 'nullable|string',
        ]);

        // Convert arrays to JSON for storage
        if (isset($validated['appliances_included'])) {
            $validated['appliances_included'] = json_encode($validated['appliances_included']);
        }
        if (isset($validated['features'])) {
            $validated['features'] = json_encode($validated['features']);
        }
        if (isset($validated['images'])) {
            $validated['images'] = json_encode($validated['images']);
        }

        // Create new property
        $property = \App\Models\Property::create($validated);

        return response()->json($property, 201);
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //show specific property
        $property::propertyWhereid($id);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //update a specific property
        $property = property::update->$request($id);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $property=property::delete($id);
    }
}
