<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
<link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
<link href="<c:url value="/assets/css/headerStyles.css"/>" rel="stylesheet">

<div class="wholeDiv">
    <div class="container">
        <div class="row">

            <div class="col-md-5">
                <a href="/scheduleMaker">
                    <h1 class="scheduleMaker">scheduleMaker</h1>
                </a>
            </div>

            <div class="parent">

                <div class="col-md-1 smallLinks">
                    <a href="/scheduleMaker/manageSchedules">Manage Schedules</a>
                </div>
                <div class="col-md-1 smallLinks">
                    <a href="/scheduleMaker/manageEmployees">Manage Employees</a>
                </div>
                <div class="col-md-1 smallLinks">
                    <a href="/scheduleMaker/managePositions">Manage Positions</a>
                </div>
                <div class="col-md-1 smallLinks">
                    <a href="/scheduleMaker/manageEmployeesPositions">Manage Employee's Positions</a>
                </div>
                <div class="col-md-1 smallLinks">
                    <a href="/scheduleMaker/manageDayPredictions">Manage Day Predictions</a>
                </div>
                <div class="col-md-1 smallLinks">
                    <a href="/scheduleMaker/manageWeekPredictions">Manage Week Predictions</a>
                </div>
                <div class="col-md-1 smallLinks">
                    <a href="j_spring_security_logout">Logout</a>
                </div>

            </div>
        </div>

    </div>
</div>

