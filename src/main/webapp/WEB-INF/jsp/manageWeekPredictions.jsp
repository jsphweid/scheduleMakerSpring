<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
                <td>${idToTextMap[weekPrediction.day0Id]}</td>
                <td>${idToTextMap[weekPrediction.day1Id]}</td>
                <td>${idToTextMap[weekPrediction.day2Id]}</td>
                <td>${idToTextMap[weekPrediction.day3Id]}</td>
                <td>${idToTextMap[weekPrediction.day4Id]}</td>
                <td>${idToTextMap[weekPrediction.day5Id]}</td>
                <td>${idToTextMap[weekPrediction.day6Id]}</td>
                <td><a class="btn btn-default" href="editWeekPrediction/${weekPrediction.id}">Edit</a></td>
            </tr>
        </c:forEach>
    </table>

    <a href="addWeekPrediction.html">
        <button class="btn btn-default">
            Add New Week Prediction >>
        </button>
    </a>



    <%--<script type="text/javascript">--%>

        <%--$(document).ready(function() {--%>



        <%--})--%>

    <%--</script>--%>


</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>