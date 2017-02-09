<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
    <title></title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">
    <form:errors path="*" cssClass="errorblock" element="div" />


    <h1>Edit Employee</h1>
    <form:form method="POST" action="/scheduleMaker/updateEmployee" modelAttribute="employee">
        <form:errors path="*" cssClass="errorblock" element="div" />


        <form:hidden path="belongsTo" />
        <form:hidden path="id" />

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

        <input class="btn btn-default" type="submit" value="Update" />
        <a href="/scheduleMaker/manageEmployees" class="btn btn-default">Cancel</a>

    </form:form>

    <a href="delete/${employee.id}"><button class="btn btn-danger">Delete Employee</button></a></td>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
