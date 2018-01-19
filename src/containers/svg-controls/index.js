import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  updateBackground,
  updateVisual
} from '../../modules/canvas';

import SVGControls from '../../components/svg-controls';

import { createColorString, getContrastingBinaryColor } from '../../utils';

const mapStateToProps = state => ({
  backgroundColor: state.canvas.present.backgroundColor,
  primarySVGColor: createColorString(state.canvas.present.colors[state.canvas.present.colors.length - 1]),
  contrastPrimarySVGColor: getContrastingBinaryColor(state.canvas.present.colors[state.canvas.present.colors.length - 1]),
  radialBackground: state.canvas.present.radialBackground,
  radialBackgroundColor: state.canvas.present.radialBackgroundColor,
  svgRef: state.canvas.svgRef
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateBackground: newBackground => updateBackground(newBackground),
  updateVisual: change => updateVisual(change)
}, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SVGControls);