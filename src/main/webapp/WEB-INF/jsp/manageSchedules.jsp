<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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




    <h2>Schedules</h2>

    <table class="table table-striped">
        <tr>
            <th>Schedule</th>
            <th>Uses Week</th>
            <th></th>
        </tr>
        <c:forEach items="${schedules}" var="schedule">
            <tr>
                <td>${schedule.title}</td>
                <td>${schedule.weekPrediction.title}</td>
                <td><a href="editSchedule/${schedule.id}"><button class="btn btn-default">Edit</button></a></td>
            </tr>
        </c:forEach>
    </table>

    <a href="addSchedule.html">
        <button class="btn btn-default">
            Add Schedule >>
        </button>
    </a>



</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>
