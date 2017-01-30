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



<h1>Edit Position</h1>
<form:form method="POST" action="/scheduleMaker/updatePosition" modelAttribute="position">
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
            <td>Title : </td>
            <td><form:input path="title" /></td>
        </tr>

        <tr>
            <td></td>
            <td><input class="btn btn-default" type="submit" value="Update" /></td>
        </tr>
    </table>
</form:form>

<tr>
    <td><a href="delete/${position.id}"><button class="btn btn-danger">Delete Position</button></td>
</tr>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>