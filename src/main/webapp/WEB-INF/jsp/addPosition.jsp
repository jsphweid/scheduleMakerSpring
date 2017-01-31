<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Title</title>
    <style>
        .error {
            color: #ff0000;
        }

        .errorblock {
            color: #000;
            background-color: #ffEEEE;
            border: 3px solid #ff0000;
            padding: 8px;
            margin: 16px;
        }
    </style>

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

</form:form>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
