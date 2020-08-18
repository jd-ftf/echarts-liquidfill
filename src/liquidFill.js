var echarts = require('echarts/lib/echarts');

require('./liquidFillSeries');
require('./liquidFillView');


echarts.registerVisual(
    echarts.util.curry(
        require('@ftf/echarts/lib/visual/dataColor'), 'liquidFill'
    )
);
