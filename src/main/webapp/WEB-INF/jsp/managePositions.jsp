<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title></title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">



<p>
    Here are all the positions
</p>

<h2>Position Table</h2>

<table border="2" cellpadding="2">
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

<a href="addPosition.html">
    <button class="btn btn-default">
        Add Position >>
    </button>
</a>



</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
