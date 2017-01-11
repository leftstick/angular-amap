
import routes from './routes';
import apidoc from './components/apidoc';
import apiSidebar from './components/subs/apiSidebar';
import apiContent from './components/subs/apiContent';
import docPlugin from './components/subs/apiContent/subs/docPlugin';
import docNgAmap from './components/subs/apiContent/subs/docNgAmap';
import docMarker from './components/subs/apiContent/subs/docMarker';
import docLngLat from './components/subs/apiContent/subs/docLngLat';
import docSize from './components/subs/apiContent/subs/docSize';
import docIcon from './components/subs/apiContent/subs/docIcon';
import docPixel from './components/subs/apiContent/subs/docPixel';

export default {
    type: 'feature',
    name: 'apidoc',
    routes,
    component: {
        apidoc,
        apiSidebar,
        apiContent,
        docPlugin,
        docNgAmap,
        docMarker,
        docLngLat,
        docSize,
        docIcon,
        docPixel
    }
};
