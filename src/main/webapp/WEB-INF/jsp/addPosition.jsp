<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Title</title>

    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">

</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">



<h2>Add new Position</h2>

<form:form commandName="position">

    <form:errors path="*" cssClass="errorblock" element="div" />

    <label for="textinput1">
        Enter Title:
    </label>
    <form:input path="title" cssErrorClass="error" />
    <form:errors path="title" cssClass="error" />
    <br/>


    <form:hidden path="belongsTo" />

    <input type="submit" class="btn btn-default" value="Add Title"/>
    <a href="/scheduleMaker/managePositions" class="btn btn-default">Cancel</a>

</form:form>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
