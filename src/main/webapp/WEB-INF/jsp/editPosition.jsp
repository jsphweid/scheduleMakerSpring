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



    <h1>Edit Position</h1>
    <form:form method="POST" action="/updatePosition" modelAttribute="position">
        <form:hidden path="id" />
        <form:hidden path="belongsTo" />
        Title :
        <form:input path="title" />
        <form:errors path="title" cssClass="error" />
        <br><br>
        <input class="btn btn-default" type="submit" value="Update" />
        <a href="/managePositions" class="btn btn-default">Cancel</a>
    </form:form>

    <a href="delete/${position.id}"><button class="btn btn-danger">Delete Position</button></a>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>