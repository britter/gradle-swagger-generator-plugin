window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "version" : "1.0.0",
    "title" : "Swagger Petstore v2 (OpenAPI 2)",
    "license" : {
      "name" : "MIT"
    }
  },
  "host" : "petstore.swagger.io",
  "basePath" : "/v1",
  "schemes" : [ "http" ],
  "consumes" : [ "application/json" ],
  "produces" : [ "application/json" ],
  "paths" : {
    "/pets" : {
      "get" : {
        "summary" : "List all pets",
        "operationId" : "listPets",
        "tags" : [ "pets" ],
        "parameters" : [ {
          "name" : "limit",
          "in" : "query",
          "description" : "How many items to return at one time (max 100)",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "An paged array of pets",
            "headers" : {
              "x-next" : {
                "type" : "string",
                "description" : "A link to the next page of responses"
              }
            },
            "schema" : {
              "$ref" : "#/definitions/Pets"
            }
          },
          "default" : {
            "description" : "unexpected error",
            "schema" : {
              "$ref" : "#/definitions/Error"
            }
          }
        }
      }
    }
  },
  "definitions" : {
    "Pet" : {
      "required" : [ "id", "name" ],
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "name" : {
          "type" : "string"
        },
        "tag" : {
          "type" : "string"
        }
      }
    },
    "Pets" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/Pet"
      }
    },
    "Error" : {
      "required" : [ "code", "message" ],
      "properties" : {
        "code" : {
          "type" : "integer",
          "format" : "int32"
        },
        "message" : {
          "type" : "string"
        }
      }
    }
  }
}