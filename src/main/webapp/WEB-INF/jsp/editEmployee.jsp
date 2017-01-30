<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
    <title></title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">



<h1>Edit Employee</h1>
<form:form method="POST" action="/scheduleMaker/updateEmployee" modelAttribute="employee">
    <table >
        <tr>
            <td></td>
            <td><form:hidden path="id" /></td>
        </tr>
        <tr>
            <td></td>
            <td><form:hidden path="belongsTo" /></td>
        </tr>
        <tr>
            <td>First Name : </td>
            <td><form:input path="firstName" /></td>
        </tr>
        <tr>
            <td>Last Name : </td>
            <td><form:input path="lastName"  /></td>
        </tr>
        <tr>
            <td>Hourly Wage :</td>
            <td><form:input path="hourlyWage" /></td>
        </tr>
        <tr>
            <td>Score :</td>
            <td><form:input path="score" /></td>
        </tr>
        <tr>
            <td>Min. Hours :</td>
            <td><form:input path="minHours" /></td>
        </tr>
        <tr>
            <td>Max. Hours :</td>
            <td><form:input path="maxHours" /></td>
        </tr>

        <tr>
            <td> </td>
            <td><input class="btn btn-default" type="submit" value="Update" /></td>
        </tr>
    </table>
</form:form>

<tr>
    <td><a href="delete/${employee.id}"><button class="btn btn-danger">Delete Employee</button></td>
</tr>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
