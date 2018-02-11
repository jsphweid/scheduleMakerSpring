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
                <%--spacer--%>
                <%--<div class="col-md-1 smallLinks"></div>--%>
                <%--<div class="col-md-1 smallLinks"></div>--%>

                <%--<div class="col-md-1 smallLinks" style="margin-top: 20px">--%>
                    <%--<div><a href="/scheduleMaker/manageSchedules">Manage Schedules</a></div>--%>
                <%--</div>--%>
                <%--<div class="col-md-1 smallLinks">--%>
                    <%--<div><a href="/scheduleMaker/manageEmployees">Manage Employees</a></div>--%>
                <%--</div>--%>
                <%--&lt;%&ndash;<div class="col-md-1 smallLinks">&ndash;%&gt;--%>
                    <%--&lt;%&ndash;<a href="/scheduleMaker/managePositions">Manage Positions</a>&ndash;%&gt;--%>
                <%--&lt;%&ndash;</div>&ndash;%&gt;--%>
                <%--&lt;%&ndash;<div class="col-md-1 smallLinks">&ndash;%&gt;--%>
                    <%--&lt;%&ndash;<a href="/scheduleMaker/manageEmployeesPositions">Manage Employee's Positions</a>&ndash;%&gt;--%>
                <%--&lt;%&ndash;</div>&ndash;%&gt;--%>
                <%--<div class="col-md-1 smallLinks">--%>
                    <%--<div><a href="/scheduleMaker/manageDayPredictions">Manage Day Predictions</a></div>--%>
                <%--</div>--%>
                <%--<div class="col-md-1 smallLinks">--%>
                    <%--<div><a href="/scheduleMaker/manageWeekPredictions">Manage Week Predictions</a></div>--%>
                <%--</div>--%>
                <%--<div class="col-md-1 smallLinks">--%>
                    <%--<div><a href="j_spring_security_logout">Logout</a></div>--%>
                <%--</div>--%>


                    <div class="collapse navbar-collapse myNavbar" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a class="page-scroll" href="/manageSchedules">Schedules</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="/manageEmployees">Employees</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="/manageDayPredictions">Day Predictions</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="/manageWeekPredictions">Week Predictions</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="/j_spring_security_logout">Logout</a>
                            </li>
                        </ul>
                    </div>

            </div>
        </div>

    </div>
</div>

