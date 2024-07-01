-- CreateTable
CREATE TABLE "restaurants" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "rating_count" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,
    "price_range" TEXT,
    "is_favorite" BOOLEAN DEFAULT false,
    "thumbnail_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurant_images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "restaurant_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restaurant_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurant_features" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "restaurant_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restaurant_features_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_features_restaurant_id_key" ON "restaurant_features"("restaurant_id");

-- AddForeignKey
ALTER TABLE "restaurant_images" ADD CONSTRAINT "restaurant_images_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_features" ADD CONSTRAINT "restaurant_features_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
