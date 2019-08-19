
const appConfig = require('../config/appConfig');

const express = require('express');
const appController = require('../controller/appController');
const authorization = require('../middleware/auth');

let setAppRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/bookStore';
    console.log(baseUrl);
    app.post(baseUrl + '/login', appController.loginUser);
    /**
     * @apiGroup login
     * @apiVersion  1.0.0
     * @api {post} /api/v1/bookStore/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IlJ5c1hRX0plaSIsIm5hbWUiOiJEaGVlcmFqIiwiZW1haWwiOiJrcmRoZWVyYWo1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRNaHRKOGN6MVdqMVg1RC9QNzJKZkVPUi5IdnZMdVhpdHJyN09lcW8xODdVTDNyeXVLRGRHNiIsIl9fdiI6MH0sImlhdCI6MTU2NjEzNTUyMH0.2Uz4iR7pz7pfXl8zXUuhJwfbFF5rBM_w5qnuInxNhJw",
        }
          @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
    */

    app.post(baseUrl + '/addBook', authorization.isAuthorized, appController.addBook);

    /**
     * @apiGroup Create
     * @apiVersion  1.0.0
     * @api {post} /api/v1/bookStore/addBook api for add more book in books collection.
     *
     * @apiParam {string} title title of the book. (body params) (required)
     * @apiParam {string} desciption description of the book. (body params) (required)
     * @apiParam {number} price price of the book. (body params) (required)
     * @apiParam {number} unit Number of units. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Adding Book Details Successfully",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6ImRUdkVmeHg2bCIsIm5hbWUiOiJEaGVlcmFqIEt1bWFyIiwiZW1haWwiOiJrcmRoZWVyYWo1MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRxTWFudDV6d2hWUG1mVGtNZFBaSjRPYW5lOUUxaURpbjY0SlVyVUtMR05iaEZvTHdLYmdGZSIsIl9fdiI6MH0sImlhdCI6MTU2NjExNjA3N30.igflsijVJzWGg8R7bn-2EE0o3Bd4kAhnejLvTL4WQqE",
                "bookDetails": {
                "title": string,
                "description": "string",
                "price": number,
                "unit": number,
            }

        }
          @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to add Book Details.",
	    "status": 500,
	    "data": null
	   }
    */
    app.post(baseUrl + '/createUser', appController.createUser);
    /**
     * @apiGroup Create
     * @apiVersion  1.0.0
     * @api {post} /api/v1/bookStore/createUser api for creating user account.
     *
     * @apiParam {string} name name of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "User Account has been created Successfully.",
            "status": 200,
            "data": {
                "userDetails": {
                "name": "string",
                "email": "string",
                "password": "string",
                "_id": "string",
                "__v": 0
            }

        }
          @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
    */
    app.post(baseUrl + '/purchaseBook/:bookId', authorization.isAuthorized, appController.purchaseBook);
    /**
     * @apiGroup Create
     * @apiVersion  1.0.0
     * @api {post} /api/v1/bookStore/purchaseBook/:bookId api for creating purchase detail.
     *
     * 
     * @apiParam {string} email email of the user. (from authToken) (required)
     * @apiParam {string} bookId password of the user. (route params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Your Order has been done successfully.",
            "status": 200,
            "data": {
                 "purchaseDetails": {
                    "email": "string",
                    "book_id": "string",
                    "_id": "string",
                    "__v": 0
                    }
        }
    }

          @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
    */

    app.get(baseUrl + '/sellBook', authorization.isAuthorized, appController.sellBook);
    /**
	 * @api {get} /api/v1/bookStore/sellBook api for displaying books detail.
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} blogId blogId of the blog passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Updated Successfully.",
	    "status": 200,
	    "data": [
					{
						blogId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						views: number,
						isPublished: boolean,
						category: "string",
						author: "string",
						tags: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


}

module.exports = {
    setAppRouter: setAppRouter,

}