define({ "api": [
  {
    "group": "Create",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/bookStore/addBook",
    "title": "api for add more book in books collection.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the book. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "desciption",
            "description": "<p>description of the book. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the book. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "unit",
            "description": "<p>Number of units. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Adding Book Details Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6ImRUdkVmeHg2bCIsIm5hbWUiOiJEaGVlcmFqIEt1bWFyIiwiZW1haWwiOiJrcmRoZWVyYWo1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRxTWFudDV6d2hWUG1mVGtNZFBaSjRPYW5lOUUxaURpbjY0SlVyVUtMR05iaEZvTHdLYmdGZSIsIl9fdiI6MH0sImlhdCI6MTU2NjExNjA3N30.igflsijVJzWGg8R7bn-2EE0o3Bd4kAhnejLvTL4WQqE\",\n        \"bookDetails\": {\n        \"title\": string,\n        \"description\": \"string\",\n        \"price\": number,\n        \"unit\": number,\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to add Book Details.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/appRoute.js",
    "groupTitle": "Create",
    "name": "PostApiV1BookstoreAddbook"
  },
  {
    "group": "Create",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/bookStore/createUser",
    "title": "api for creating user account.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Account has been created Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"userDetails\": {\n        \"name\": \"string\",\n        \"email\": \"string\",\n        \"password\": \"string\",\n        \"_id\": \"string\",\n        \"__v\": 0\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/appRoute.js",
    "groupTitle": "Create",
    "name": "PostApiV1BookstoreCreateuser"
  },
  {
    "group": "Create",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/bookStore/purchaseBook/:bookId",
    "title": "api for creating purchase detail.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (from authToken) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bookId",
            "description": "<p>password of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n        \"error\": false,\n        \"message\": \"Your Order has been done successfully.\",\n        \"status\": 200,\n        \"data\": {\n             \"purchaseDetails\": {\n                \"email\": \"string\",\n                \"book_id\": \"string\",\n                \"_id\": \"string\",\n                \"__v\": 0\n                }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/appRoute.js",
    "groupTitle": "Create",
    "name": "PostApiV1BookstorePurchasebookBookid"
  },
  {
    "type": "get",
    "url": "/api/v1/bookStore/sellBook",
    "title": "api for displaying books detail.",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tblogId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tbodyHtml: \"string\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tisPublished: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tauthor: \"string\",\n\t\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/appRoute.js",
    "groupTitle": "Read",
    "name": "GetApiV1BookstoreSellbook"
  },
  {
    "group": "login",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/bookStore/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IlJ5c1hRX0plaSIsIm5hbWUiOiJEaGVlcmFqIiwiZW1haWwiOiJrcmRoZWVyYWo1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRNaHRKOGN6MVdqMVg1RC9QNzJKZkVPUi5IdnZMdVhpdHJyN09lcW8xODdVTDNyeXVLRGRHNiIsIl9fdiI6MH0sImlhdCI6MTU2NjEzNTUyMH0.2Uz4iR7pz7pfXl8zXUuhJwfbFF5rBM_w5qnuInxNhJw\",\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/appRoute.js",
    "groupTitle": "login",
    "name": "PostApiV1BookstoreLogin"
  }
] });
