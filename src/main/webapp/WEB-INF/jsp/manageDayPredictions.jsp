<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<p>
    Here are all the day predictions
</p>

<h2>Day Prediction Table</h2>

<table border="2" cellpadding="2">
    <tr>
        <th>Day Prediction</th>
        <th></th>
    </tr>
    <c:forEach items="${dayPredictions}" var="dayPrediction">
        <tr>
            <td>${dayPrediction.title}</td>
            <td><a href="showDayPrediction/${dayPrediction.id}"><button class="btn btn-default">Show</button></a></td>
        </tr>
    </c:forEach>
</table>

<a href="addDayPrediction.html">
    <button class="btn btn-default">
        Add Day Prediction >>
    </button>
</a>
