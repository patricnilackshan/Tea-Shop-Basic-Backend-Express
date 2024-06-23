# TeaShopBasicBackend

**GET** READ all tea data
`127.0.0.1:3000/teas`
This endpoint retrieves a list of teas. The response is a JSON array containing objects with the keys "id", "name", and "price".

``` json
[
  {
    "id": 0,
    "name": "",
    "price": ""
  }
]

 ```

---

**GET** READ specific tea by its ID
`127.0.0.1:3000/teas/{{randomNumber}}`
This endpoint retrieves details of a specific tea identified by TeaID. The response will be in JSON format and will include the tea's ID, name, and price.

``` json
{
    "id": 1,
    "name": "Masala Tea",
    "price": "Rs.100.00"
}

 ```

---

**POST** CREATE new tea data
`127.0.0.1:3000/teas/`
The POST request to `/teas/` endpoint allows the client to add a new tea with the specified name and price. The request should include a JSON payload with the "name" and "price" fields.

### Request Body

- `name` (string, required): The name of the tea.
    
- `price` (string, required): The price of the tea.
    

### Response

The response to this request is a JSON array with objects containing the following fields:

- `id` (number): The unique identifier of the tea.
    
- `name` (string): The name of the tea.
    
- `price` (string): The price of the tea.
    

#### JSON Schema

``` json
[
    {
        "id": 1,
        "name": "Masala Tea",
        "price": "Rs.100.00"
    },
    {
        "id": 2,
        "name": "Ginger Tea",
        "price": "Rs.150.00"
    },
    {
        "id": 3,
        "name": "Lemon Tea",
        "price": "Rs.200.00"
    }
]

 ```

### Body raw (json)
```json
{
    "name"  : "Foster Tea",
    "price" : "Rs.285.58"
}
```

---

**PUT** UPDATE tea data
`127.0.0.1:3000/teas/{{randomNumber}}`
This endpoint allows you to update a specific tea using the tea's unique identifier.

### Request Body

- `name` (string, required): The name of the tea.
    
- `price` (string, required): The price of the tea.
    

### Response

The response is in JSON format and has the following schema:

``` json
{
    "id": 4,
    "name": "Quincy Tea",
    "price": "Rs.335.54"
}

 ```

### Body raw (json)
```json
{
    "name"  : "Aric Tea",
    "price" : "Rs.463.26"
}
```

---

**DEL** DELETE specific tea by its ID
`127.0.0.1:3000/teas/{{randomNumber}}`
The endpoint makes an HTTP DELETE request to delete a specific tea item identified by the provided random number.

### Response

The response is in JSON format with a status code of 200. The response body follows the schema:

``` json
[
    {
        "id": 2,
        "name": "Ginger Tea",
        "price": "Rs.150.00"
    },
    {
        "id": 3,
        "name": "Lemon Tea",
        "price": "Rs.200.00"
    }
]

 ```
