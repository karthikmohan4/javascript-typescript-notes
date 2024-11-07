//named constants 
var Status;
(function (Status) {
    Status[Status["INITIALISED"] = 0] = "INITIALISED";
    Status[Status["CANCELLED"] = 1] = "CANCELLED";
    Status[Status["PENDING"] = 2] = "PENDING";
    Status[Status["CLOSED"] = 3] = "CLOSED";
})(Status || (Status = {}));
console.log(Status.CLOSED);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
var response = {
    url: "aaw",
    type: "GET",
    data: "some data",
    status: StatusCode.Created
};
console.log(response);
