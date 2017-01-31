<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Schedule Maker Login</title>

    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">

</head>
<body onload='document.f.j_username.focus()'>
<jsp:include page="template/header.jsp"/>
<div class="container">



<h3>Schedule Maker Login</h3>
<c:if test="${not empty error}">
    <div class="errorblock">
        Your login was unsuccessful. <br />
        Caused: ${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message }
    </div>
</c:if>

<form action="j_spring_security_check" name="f" method="post">
    <table>
        <tr>
            <td>User:</td>
            <td><input type="text" name="j_username" value=""></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" name="j_password"></td>
        </tr>
        <tr>
            <td colspan="2">
                <input class="btn btn-default" type="submit" name="Submit" value="Submit">
            </td>
        </tr>
        <tr>
            <td colspan="2"><input class="btn btn-default" type="reset" name="reset"></td>
        </tr>
    </table>
</form>



</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
