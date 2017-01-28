<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Employee Management Page</title>
</head>
<body>

<p>
    Here is where you'll manage employees. You'll be able to see all of them and add
    new ones...
</p>

<h2>Employee Table</h2>

<table border="2" cellpadding="2">
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
            <td><a href="editEmployee/${emp.id}"><button class="btn btn-default">Edit</button></a></td>
        </tr>
    </c:forEach>
</table>

<a href="addEmployee.html">
    <button class="btn btn-default">
        Add Employee >>
    </button>
</a>

</body>
</html>
