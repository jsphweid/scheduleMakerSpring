<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>

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
            <td><input id="usrName" type="text" name="j_username" value=""></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input id="psword" type="password" name="j_password"></td>
        </tr>
        <tr>
            <td colspan="2">
                <input id="loginn" class="bbtns btn btn-default" type="submit" name="Submit" value="Submit">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <button id="demoButton" class="bbtns btn btn-default">Demo</button>
            </td>
        </tr>
    </table>
    <input type="hidden" name="spring-security-redirect" value="/editSchedule/1" />
</form>

    <script type="text/javascript">
        $(document).ready(function() {
            $("#demoButton").on('click', function() {
                $("#usrName").val("demo");
                $("#psword").val("password");
                $("#loginn").click();
            });
        });
    </script>



</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
