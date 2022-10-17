import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import LegalPagePreview from './preview-templates/LegalPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import '../../static/admin/cms-preview.css'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('legal-notice', LegalPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)