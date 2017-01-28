<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html>
<head>
    <title>Title</title>
    <style>
        .error {
            color: #ff0000;
        }

        .errorblock {
            color: #000;
            background-color: #ffEEEE;
            border: 3px solid #ff0000;
            padding: 8px;
            margin: 16px;
        }
    </style>
</head>
<body>
<h2>Add new Employee</h2>

<form:form commandName="employee">

    <form:errors path="*" cssClass="errorblock" element="div" />

    <label for="textinput1">
        Enter First Name:
    </label>
    <form:input path="firstName" cssErrorClass="error" />
    <form:errors path="firstName" cssClass="error" />
    <br/>

    <label for="textinput2">
        Enter Last Name:
    </label>
    <form:input path="lastName" cssErrorClass="error" />
    <form:errors path="lastName" cssClass="error" />
    <br/>

    <label for="textinput3">
        Enter Hourly Wage:
    </label>
    <form:input path="hourlyWage" cssErrorClass="error" />
    <form:errors path="hourlyWage" cssClass="error" />
    <br/>


    <label for="textinput4">
        Enter Score:
    </label>
    <form:input path="score" cssErrorClass="error" />
    <form:errors path="score" cssClass="error" />
    <br/>

    <label for="textinput5">
        Enter Minimum Hours:
    </label>
    <form:input path="minHours" cssErrorClass="error" />
    <form:errors path="minHours" cssClass="error" />
    <br/>

    <label for="textinput6">
        Enter Maximum Hours:
    </label>
    <form:input path="maxHours" cssErrorClass="error" />
    <form:errors path="maxHours" cssClass="error" />
    <br/>

    <form:hidden path="belongsTo" />

    <input type="submit" class="btn btn-default" value="Add Employee"/>

</form:form>

</body>
</html>
