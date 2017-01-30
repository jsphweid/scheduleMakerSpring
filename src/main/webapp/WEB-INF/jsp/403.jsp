<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Unauthorized</title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>

<div class="container">



    <h1>You are not authorized, Sorry.</h1>



</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>
