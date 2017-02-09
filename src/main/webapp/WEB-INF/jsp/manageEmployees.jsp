<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

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


    <h2>Employees</h2>

    <a class="btn btn-default" style="margin-bottom: 20px" href="addEmployee.html">
        Add Employee
    </a>

    <table class="table table-striped">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hourly Wage</th>
            <th>Score</th>
            <th>Min. Hours</th>
            <th>Max. Hours</th>
            <th></th>
        </tr>
        <c:forEach items="${employees}" var="emp">
            <tr>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.hourlyWage}</td>
                <td>${emp.score}</td>
                <td>${emp.minHours}</td>
                <td>${emp.maxHours}</td>
                <td><a href="editEmployee/${emp.id}">
                    <button class="btn btn-default">Edit</button>
                </a></td>
            </tr>
        </c:forEach>
    </table>

</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>