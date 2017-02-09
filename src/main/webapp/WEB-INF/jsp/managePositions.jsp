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

<h2>Positions</h2>

    <a style="margin-bottom: 20px;" class="btn btn-default" href="addPosition.html">Add Position</a>

<table class="table table-striped">
    <tr>
        <th>Position</th>
        <th></th>
    </tr>
    <c:forEach items="${positions}" var="position">
        <tr>
            <td>${position.title}</td>
            <td><a href="editPosition/${position.id}"><button class="btn btn-default">Edit</button></a></td>
        </tr>
    </c:forEach>
</table>



</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
