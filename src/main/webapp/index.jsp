<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="WEB-INF/jsp/template/header.jsp"/>
<div class="container">



<h2>Welcome <sec:authentication property="name" /></h2>

<table>
    <tr>
        <th colspan="1"></th>
    </tr>
    <tr>
        <td><a class="btn btn-default" href="manageEmployees.html">Manage Employees >></a></td>
    </tr>
    <tr>
        <td><a class="btn btn-default" href="managePositions.html">Manage Positions >></a></td>
    </tr>
    <tr>
        <td><a class="btn btn-default" href="manageDayPredictions.html">Manage Day Predictions >></a></td>
    </tr>
    <tr>
        <td><a class="btn btn-default" href="manageWeekPredictions.html">Manage Week Predictions >></a></td>
    </tr>
</table>

<a class="btn btn-danger" href="j_spring_security_logout">Logout >></a>



</div>
<jsp:include page="WEB-INF/jsp/template/footer.jsp"/>
</body>
</html>
