<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>

<div class="container">


    <table border="2" cellpadding="2">
        <tr>
            <th>Title</th>
            <th>Day 1</th>
            <th>Day 2</th>
            <th>Day 3</th>
            <th>Day 4</th>
            <th>Day 5</th>
            <th>Day 6</th>
            <th>Day 7</th>
            <th></th>
        </tr>
        <c:forEach items="${allWeekPredictions}" var="weekPrediction">
            <tr>
                <td>${weekPrediction.title}</td>
                <td>${weekPrediction.day0Id}</td>
                <td>${weekPrediction.day1Id}</td>
                <td>${weekPrediction.day2Id}</td>
                <td>${weekPrediction.day3Id}</td>
                <td>${weekPrediction.day4Id}</td>
                <td>${weekPrediction.day5Id}</td>
                <td>${weekPrediction.day6Id}</td>
                <td><a class="btn btn-default" href="editWeekPrediction/${weekPrediction.id}">Edit</a></td>
            </tr>
        </c:forEach>
    </table>



</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>