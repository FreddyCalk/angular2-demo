"use strict";
var User = (function () {
    function User(Id, FirstName, LastName, Email, Password, PasswordConfirm, Address1, Address2, City, State, Zip) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
        this.PasswordConfirm = PasswordConfirm;
        this.Address1 = Address1;
        this.Address2 = Address2;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
    }
    User.Empty = new User(1, '', '', '', '', '');
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map