# Dokumentasi Proyek

## Setup dan Penggunaan

### Persiapan Proyek

1. **Instalasi Dependensi**

   Pastikan semua dependensi proyek telah diinstal dengan menjalankan:

   ```bash
   npm install
   ```

2. **Migrasi**
   Untuk menerapkan migrasi dan membuat tabel di database, gunakan perintah berikut:

   ```bash
   npx sequelize-cli db:migrate --config src/config/config.js --migrations-path src/migrations
   ```

3. **Seeder**
   Untuk memasukkan data awal ke dalam tabel (seeding), jalankan perintah berikut:

   ```bash
   npx sequelize-cli db:seed:all --config src/config/config.js --seeders-path src/seeders
   ```

4. **Rollback Semua Migrasi**
   Untuk membatalkan semua migrasi yang diterapkan, jalankan:

   ```bash
   npx sequelize-cli db:migrate:undo:all --config src/config/config.js --migrations-path src/migrations
   ```

5. **Hapus Seeder**
   Jika Anda perlu menghapus data yang telah di-seed, gunakan perintah ini:

   ```bash
   npx sequelize-cli db:seed:undo:all --config src/config/config.js --seeders-path src/seeders
   ```

# API Documentation

## User Endpoints

### `GET /users`

- **Description:** Retrieve all users.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/users`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Users retrieved successfully",
      "data": [
        /* Array of user objects */
      ],
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve users",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `GET /users/:id`

- **Description:** Retrieve a user by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/users/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "User retrieved successfully",
      "data": {
        /* User object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "User not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve user",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `PUT /users/:id`

- **Description:** Update a user by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** PUT
  - **URL:** `http://localhost:8000/api/users/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "User updated successfully",
      "data": {
        /* Updated user object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "User not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to update user",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `DELETE /users/:id`

- **Description:** Delete a user by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** DELETE
  - **URL:** `http://localhost:8000/api/users/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "User deleted successfully",
      "data": null,
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "User not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to delete user",
      "data": null,
      "errors": ["Error message"]
    }
    ```

---

## Product Endpoints

### `GET /products`

- **Description:** Retrieve all products.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/products`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Products retrieved successfully",
      "data": [
        /* Array of product objects */
      ],
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve products",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `GET /products/:id`

- **Description:** Retrieve a product by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/products/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Product retrieved successfully",
      "data": {
        /* Product object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Product not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve product",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `POST /products`

- **Description:** Create a new product.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** POST
  - **URL:** `http://localhost:8000/api/products`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "productName": "string",
      "productPrice": "number",
      "categoryId": "integer",
      "desc": "string"
    }
    ```
- **Response:**
  - **201 Created**
    ```json
    {
      "status": "success",
      "message": "Product created successfully",
      "data": {
        /* Created product object */
      },
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to create product",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `PUT /products/:id`

- **Description:** Update a product by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** PUT
  - **URL:** `http://localhost:8000/api/products/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "productName": "string",
      "productPrice": "number",
      "categoryId": "integer",
      "desc": "string"
    }
    ```
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Product updated successfully",
      "data": {
        /* Updated product object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Product not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to update product",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `DELETE /products/:id`

- **Description:** Delete a product by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** DELETE
  - **URL:** `http://localhost:8000/api/products/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Product deleted successfully",
      "data": null,
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Product not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to delete product",
      "data": null,
      "errors": ["Error message"]
    }
    ```

---

## Category Endpoints

### `GET /categories`

- **Description:** Retrieve all categories.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/categories`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Categories retrieved successfully",
      "data": [
        /* Array of category objects */
      ],
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve categories",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `GET /categories/:id`

- **Description:** Retrieve a category by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/categories/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Category retrieved successfully",
      "data": {
        /* Category object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Category not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve category",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `POST /categories`

- **Description:** Create a new category.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** POST
  - **URL:** `http://localhost:8000/api/categories`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "categoryName": "string"
    }
    ```
- **Response:**
  - **201 Created**
    ```json
    {
      "status": "success",
      "message": "Category created successfully",
      "data": {
        /* Created category object */
      },
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to create category",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `PUT /categories/:id`

- **Description:** Update a category by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** PUT
  - **URL:** `http://localhost:8000/api/categories/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "categoryName": "string"
    }
    ```
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Category updated successfully",
      "data": {
        /* Updated category object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Category not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to update category",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `DELETE /categories/:id`

- **Description:** Delete a category by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** DELETE
  - **URL:** `http://localhost:8000/api/categories/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Category deleted successfully",
      "data": null,
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Category not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to delete category",
      "data": null,
      "errors": ["Error message"]
    }
    ```

## Cart Endpoints

### `GET /carts`

- **Description:** Retrieve all carts.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/carts`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Carts retrieved successfully",
      "data": [
        /* Array of cart objects */
      ],
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve carts",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `GET /carts/:id`

- **Description:** Retrieve a cart by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** GET
  - **URL:** `http://localhost:8000/api/carts/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Cart retrieved successfully",
      "data": {
        /* Cart object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Cart not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve cart",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `POST /carts`

- **Description:** Add an item to the cart. If an item with the same user ID and product ID exists, increment its quantity.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** POST
  - **URL:** `http://localhost:8000/api/carts`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "userId": "integer",
      "productId": "integer",
      "qty": "integer"
    }
    ```
- **Response:**
  - **201 Created**
    ```json
    {
      "status": "success",
      "message": "Item added to cart successfully",
      "data": {
        /* Cart object with updated quantity */
      },
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to add item to cart",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `PUT /carts/:id`

- **Description:** Update the quantity of an item in the cart by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** PUT
  - **URL:** `http://localhost:8000/api/carts/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "qty": "integer"
    }
    ```
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Cart item updated successfully",
      "data": {
        /* Updated cart object */
      },
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Cart item not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to update cart item",
      "data": null,
      "errors": ["Error message"]
    }
    ```

### `DELETE /carts/:id`

- **Description:** Remove an item from the cart by ID.
- **Auth Required:** Yes
- **Postman Request:**
  - **Method:** DELETE
  - **URL:** `http://localhost:8000/api/carts/:id`
  - **Headers:**
    - `Authorization: Bearer <your_token>`
- **Response:**
  - **200 OK**
    ```json
    {
      "status": "success",
      "message": "Cart item removed successfully",
      "data": null,
      "errors": null
    }
    ```
  - **404 Not Found**
    ```json
    {
      "status": "error",
      "message": "Cart item not found",
      "data": null,
      "errors": null
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "status": "error",
      "message": "Failed to remove cart item",
      "data": null,
      "errors": ["Error message"]
    }
    ```
