<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('property', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->decimal('price', 10, 2);
            $table->string('location');
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->integer('area');
            $table->string('property_type');
            $table->string('listing_status')->default('available')->index();
            $table->string('condition')->nullable();
            $table->year('year_built')->nullable();
            $table->integer('lot_size')->nullable()->comment('in square feet');
            $table->string('lot_size_unit')->default('sqft');
            $table->integer('living_area')->nullable()->comment('finished living area in sqft');
            $table->integer('parking_spaces')->nullable();
            $table->string('parking_type')->nullable();
            $table->integer('garage_spaces')->nullable();
            $table->boolean('basement')->default(false);
            $table->boolean('basement_finished')->nullable();
            $table->string('basement_type')->nullable();
            $table->string('roof_type')->nullable();
            $table->string('exterior_material')->nullable();
            $table->string('foundation')->nullable();
            $table->string('heating_type')->nullable();
            $table->string('cooling_type')->nullable();
            $table->string('fuel_type')->nullable();
            $table->string('water_source')->nullable();
            $table->string('sewer_type')->nullable();
            $table->string('electric_service')->nullable();
            $table->string('flooring')->nullable();
            $table->integer('stories')->nullable();
            $table->string('property_view')->nullable();
            $table->string('zoning')->nullable();
            $table->string('neighborhood')->nullable();
            $table->string('school_district')->nullable();
            $table->decimal('property_tax', 12, 2)->nullable();
            $table->integer('tax_year')->nullable();
            $table->decimal('hoa_fee', 12, 2)->nullable();
            $table->string('hoa_fee_period')->nullable()->comment('monthly/annual/etc');
            $table->decimal('hoa_transfer_fee', 12, 2)->nullable();
            $table->boolean('pets_allowed')->nullable();
            $table->boolean('furnished')->nullable();
            $table->json('appliances_included')->nullable();
            $table->json('features')->nullable()->comment('e.g. fireplace, walk-in closet, pool');
            $table->json('images')->nullable();
            $table->string('mls_number')->nullable()->index();
            $table->integer('days_on_market')->nullable();
            $table->timestamp('available_from')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->string('energy_rating')->nullable();
            $table->text('seller_disclosure')->nullable();
            $table->text('additional_notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property');
    }
};
