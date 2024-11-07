//named constants 

enum Status{
    INITIALISED,
    CANCELLED,
    PENDING,
    CLOSED
}
 console.log(Status.CLOSED);


 enum StatusCode{
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    Created = 201,
    BadRequest = 400
 }

 const response = {
    url:"aaw",
    type:"GET",
    data:"some data",
    status: StatusCode.Created
 }
 console.log(response);