import { createGlobalStyle } from 'styled-components';

// Codes for color palette
export const colors = {
  disabled: 'hsl(212.3, 16.7%, 69.4%)',
  error: 'hsl(359.6, 82.1%, 62.7%)',
  errorActive: 'hsl(359.6, 82.1%, 42.7%)',
  errorHover: 'hsl(359.6, 82.1%, 65%)',
  primary: 'hsl(209.6, 100%, 55.9%)',
  primaryActive: 'hsl(209.6, 100%, 35.9%)',
  primaryHover: 'hsl(209.6, 100%, 65%)',
  secondary: 'hsl(29.4, 100%, 63.1%)',
  secondaryActive: 'hsl(29.4, 100%, 43.1%)',
  secondaryHover: 'hsl(29.4, 100%, 65%)',
  success: 'hsl(164, 75.6%, 46.7%)',
  successActive: 'hsl(164, 75.6%, 26.7%)',
  successHover: 'hsl(164, 75.6%, 60%)',
  text: 'hsl(0, 0%, 80%)',
  background: 'hsl(0, 0%, 7%)',
  backgroundDrop: 'hsl(0, 0%, 11%)'
};

// Sizes for typography scale
export const sizes = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '24px',
  xxxl: '30px',
  xxxxl: '36px'
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: ${colors.background};
    color: ${colors.text};
    font-size: 1.1em;
    line-height: 1.5;
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0;
    padding: 0;
  }

  a {
    color: hsla(${colors.secondary}, 100%, 47%, 1);
  }
`;

export default GlobalStyle;

const whatever = {
  name: 'umbra',
  type: 'dark',
  colors: {
    'activityBar.activeBorder': '#f25262',
    'activityBar.background': '#0d0c0c',
    'activityBar.border': '#0d0c0c',
    'activityBar.dropBackground': '#121212bf',
    'activityBar.foreground': '#cfc6c6',
    'activityBar.inactiveForeground': '#474747',
    'activityBarBadge.background': '#f25262',
    'activityBarBadge.foreground': '#fff5f5',

    'badge.background': '#f25262',
    'badge.foreground': '#fff5f5',

    'breadcrumb.activeSelectionForeground': '#fff5f5',
    'breadcrumb.focusForeground': '#fff5f5',
    'breadcrumb.foreground': '#6c6767',

    'button.background': '#2f2f2f',
    'button.foreground': '#8f8c8c',
    'button.hoverBackground': '#1c1c1c',

    'debugExceptionWidget.background': '#0d0c0c',
    'debugExceptionWidget.border': '#1c1c1c',
    'debugIcon.breakpointCurrentStackframeForeground': '#f25262',
    'debugIcon.breakpointDisabledForeground': '#c0b6b6',
    'debugIcon.breakpointForeground': '#fc618d',
    'debugIcon.breakpointStackframeForeground': '#fff5f5',
    'debugIcon.breakpointUnverifiedForeground': '#fd9353',
    'debugIcon.continueForeground': '#fff5f5',
    'debugIcon.disconnectForeground': '#fff5f5',
    'debugIcon.pauseForeground': '#fff5f5',
    'debugIcon.restartForeground': '#7bd88f',
    'debugIcon.startForeground': '#7bd88f',
    'debugIcon.stepBackForeground': '#fff5f5',
    'debugIcon.stepIntoForeground': '#fff5f5',
    'debugIcon.stepOutForeground': '#fff5f5',
    'debugIcon.stepOverForeground': '#fff5f5',
    'debugIcon.stopForeground': '#fc618d',
    'debugToolBar.background': '#141414',

    descriptionForeground: '#8f8c8c',

    'diffEditor.insertedTextBackground': '#7bd88f19',
    'diffEditor.removedTextBackground': '#fc618d19',

    'dropdown.background': '#1c1c1c',
    'dropdown.border': '#1c1c1c',
    'dropdown.foreground': '#8f8c8c',
    'dropdown.listBackground': '#373535',

    'editor.background': '#1c1c1c',

    'editor.findMatchBackground': '#fff5f526',
    'editor.findMatchBorder': '#f25262',
    'editor.findMatchHighlightBackground': '#fff5f526',
    'editor.findMatchHighlightBorder': '#00000000',
    'editor.findRangeHighlightBackground': '#fff5f50c',
    'editor.findRangeHighlightBorder': '#00000000',

    'editor.foreground': '#cccccc',
    'editor.hoverHighlightBackground': '#fff5f510',
    'editor.inactiveSelectionBackground': '#fff5f50c',
    'editor.lineHighlightBackground': '#fff5f50c',
    'editor.lineHighlightBorder': '#00000000',
    'editor.rangeHighlightBackground': '#373535',
    'editor.rangeHighlightBorder': '#373535',

    'editor.selectionBackground': '#c0b6b626',
    'editor.selectionHighlightBackground': '#fff5f526',
    'editor.selectionHighlightBorder': '#00000000',
    'editor.wordHighlightBackground': '#fff5f526',
    'editor.wordHighlightBorder': '#00000000',
    'editor.wordHighlightStrongBackground': '#fff5f526',
    'editor.wordHighlightStrongBorder': '#00000000',

    'editorBracketMatch.background': '#1c1c1c',
    'editorBracketMatch.border': '#6c6767',
    'editorCodeLens.foreground': '#6c6767',

    'editorCursor.background': '#1c1c1c',
    'editorCursor.foreground': '#ffffff',

    'editorError.border': '#00000000',
    'editorError.foreground': '#fc618d',

    'editorGroup.border': '#121212',
    'editorGroup.dropBackground': '#121212bf',
    'editorGroup.emptyBackground': '#1c1c1c',
    'editorGroup.focusedEmptyBorder': '#121212',
    'editorGroupHeader.noTabsBackground': '#1c1c1c',
    'editorGroupHeader.tabsBackground': '#121212',
    'editorGroupHeader.tabsBorder': '#1c1c1c',

    'editorGutter.addedBackground': '#cbf075',
    'editorGutter.background': '#1c1c1c',
    'editorGutter.deletedBackground': '#f0758a',
    'editorGutter.modifiedBackground': '#75f0f0',

    'editorHint.border': '#1c1c1c',
    'editorHint.foreground': '#948ae3',

    'editorHoverWidget.background': '#373535',
    'editorHoverWidget.border': '#1c1c1c',

    'editorIndentGuide.background': '#373535',

    'editorInfo.border': '#1c1c1c',
    'editorInfo.foreground': '#5ad4e6',

    'editorLightBulb.foreground': '#fce566',
    'editorLightBulbAutoFix.foreground': '#7bd88f',

    'editorLineNumber.activeForeground': '#c0b6b6',
    'editorLineNumber.foreground': '#4b4b4b',

    'editorLink.activeForeground': '#5ad4e6',

    'editorMarkerNavigation.background': '#373535',
    'editorMarkerNavigationError.background': '#fc618d',
    'editorMarkerNavigationInfo.background': '#5ad4e6',
    'editorMarkerNavigationWarning.background': '#fd9353',

    'editorOverviewRuler.addedForeground': '#cbf075',
    'editorOverviewRuler.border': '#1c1c1c',
    'editorOverviewRuler.currentContentForeground': '#373535',
    'editorOverviewRuler.deletedForeground': '#f0758a',
    'editorOverviewRuler.errorForeground': '#f0758a',
    'editorOverviewRuler.findMatchForeground': '#fff5f526',
    'editorOverviewRuler.incomingContentForeground': '#373535',
    'editorOverviewRuler.infoForeground': '#5ad4e6',
    'editorOverviewRuler.modifiedForeground': '#90dcf3',
    'editorOverviewRuler.rangeHighlightForeground': '#fff5f526',
    'editorOverviewRuler.selectionHighlightForeground': '#fff5f526',
    'editorOverviewRuler.warningForeground': '#fd9353',
    'editorOverviewRuler.wordHighlightForeground': '#fff5f526',
    'editorOverviewRuler.wordHighlightStrongForeground': '#fff5f526',

    'editorPane.background': '#1c1c1c',
    'editorRuler.foreground': '#474747',
    'editorSuggestWidget.background': '#373535',
    'editorSuggestWidget.border': '#373535',
    'editorSuggestWidget.foreground': '#c0b6b6',
    'editorSuggestWidget.highlightForeground': '#fff5f5',
    'editorSuggestWidget.selectedBackground': '#6c6767',

    'editorWarning.border': '#00000000',
    'editorWarning.foreground': '#fd9353',
    'editorWhitespace.foreground': '#474747',

    'editorWidget.background': '#373535',
    'editorWidget.border': '#373535',

    errorForeground: '#fc618d',

    'extensionButton.prominentBackground': '#373535',
    'extensionButton.prominentForeground': '#fff5f5',
    'extensionButton.prominentHoverBackground': '#474747',

    focusBorder: '#555050',
    foreground: '#fff5f5',

    'gitDecoration.addedResourceForeground': '#cbf075',
    'gitDecoration.conflictingResourceForeground': '#fd9353',
    'gitDecoration.deletedResourceForeground': '#f0758a',
    'gitDecoration.ignoredResourceForeground': '#474747',
    'gitDecoration.modifiedResourceForeground': '#90dcf3',
    'gitDecoration.untrackedResourceForeground': '#fd9353',

    'input.background': '#2f2f2f',
    'input.border': '#2c2c2c',
    'input.foreground': '#fff5f5',
    'input.placeholderForeground': '#6c6767',
    'inputOption.activeBackground': '#474747',
    'inputOption.activeBorder': '#474747',
    'inputValidation.errorBackground': '#373535',
    'inputValidation.errorBorder': '#fc618d',
    'inputValidation.errorForeground': '#fc618d',
    'inputValidation.infoBackground': '#373535',
    'inputValidation.infoBorder': '#5ad4e6',
    'inputValidation.infoForeground': '#5ad4e6',
    'inputValidation.warningBackground': '#373535',
    'inputValidation.warningBorder': '#fd9353',
    'inputValidation.warningForeground': '#fd9353',

    'list.activeSelectionBackground': '#2f2f2f',
    'list.activeSelectionForeground': '#cccccc',
    'list.dropBackground': '#121212bf',
    'list.errorForeground': '#fc618d',
    'list.focusBackground': '#1c1c1c',
    'list.focusForeground': '#fff5f5',
    'list.highlightForeground': '#fff5f5',
    'list.hoverBackground': '#121212',
    'list.hoverForeground': '#fff5f5',
    'list.inactiveFocusBackground': '#1c1c1c',
    'list.inactiveSelectionBackground': '#1c1c1c',
    'list.inactiveSelectionForeground': '#cccccc',
    'list.invalidItemForeground': '#fc618d',
    'list.warningForeground': '#fd9353',
    'listFilterWidget.background': '#1c1c1c',
    'listFilterWidget.noMatchesOutline': '#fc618d',
    'listFilterWidget.outline': '#1c1c1c',

    'merge.border': '#1c1c1c',
    'merge.commonContentBackground': '#fff5f519',
    'merge.commonHeaderBackground': '#fff5f526',
    'merge.currentContentBackground': '#fc618d19',
    'merge.currentHeaderBackground': '#fc618d26',
    'merge.incomingContentBackground': '#7bd88f19',
    'merge.incomingHeaderBackground': '#7bd88f26',

    'minimap.errorHighlight': '#fc618d',
    'minimap.warningHighlight': '#fd9353',
    'minimapGutter.addedBackground': '#cbf075',
    'minimapGutter.deletedBackground': '#f0758a',
    'minimapGutter.modifiedBackground': '#90dcf3',

    'notificationCenter.border': '#373535',
    'notificationCenterHeader.background': '#373535',
    'notificationCenterHeader.foreground': '#8f8c8c',
    'notificationLink.foreground': '#f25262',
    'notificationToast.border': '#373535',
    'notifications.background': '#373535',
    'notifications.border': '#373535',
    'notifications.foreground': '#c0b6b6',
    'notificationsErrorIcon.foreground': '#fc618d',
    'notificationsInfoIcon.foreground': '#5ad4e6',
    'notificationsWarningIcon.foreground': '#fd9353',

    'panel.background': '#121212',
    'panel.border': '#0d0c0c',
    'panel.dropBackground': '#121212bf',
    'panelTitle.activeBorder': '#121212',
    'panelTitle.activeForeground': '#f25262',
    'panelTitle.inactiveForeground': '#474747',

    'peekView.border': '#1c1c1c',
    'peekViewEditor.background': '#373535',
    'peekViewEditor.matchHighlightBackground': '#474747',
    'peekViewEditorGutter.background': '#373535',
    'peekViewResult.background': '#373535',
    'peekViewResult.fileForeground': '#8f8c8c',
    'peekViewResult.lineForeground': '#8f8c8c',
    'peekViewResult.matchHighlightBackground': '#474747',
    'peekViewResult.selectionBackground': '#373535',
    'peekViewResult.selectionForeground': '#fff5f5',
    'peekViewTitle.background': '#373535',
    'peekViewTitleDescription.foreground': '#8f8c8c',
    'peekViewTitleLabel.foreground': '#fff5f5',

    'pickerGroup.border': '#1c1c1c',
    'pickerGroup.foreground': '#474747',

    'problemsErrorIcon.foreground': '#fc618d',
    'problemsInfoIcon.foreground': '#5ad4e6',
    'problemsWarningIcon.foreground': '#fd9353',

    'progressBar.background': '#373535',

    'scrollbar.shadow': '#00000055',
    'scrollbarSlider.activeBackground': '#fff5f512',
    'scrollbarSlider.background': '#fff5f512',
    'scrollbarSlider.hoverBackground': '#fff5f512',

    'selection.background': '#c0b6b626',

    'settings.checkboxBackground': '#373535',
    'settings.checkboxBorder': '#373535',
    'settings.checkboxForeground': '#fff5f5',
    'settings.dropdownBackground': '#373535',
    'settings.dropdownBorder': '#373535',
    'settings.dropdownForeground': '#fff5f5',
    'settings.dropdownListBorder': '#8f8c8c',
    'settings.headerForeground': '#f25262',
    'settings.modifiedItemIndicator': '#f25262',
    'settings.numberInputBackground': '#373535',
    'settings.numberInputBorder': '#373535',
    'settings.numberInputForeground': '#fff5f5',
    'settings.textInputBackground': '#373535',
    'settings.textInputBorder': '#373535',
    'settings.textInputForeground': '#fff5f5',

    'sideBar.background': '#121212',
    'sideBar.border': '#0d0c0c',
    'sideBar.dropBackground': '#121212bf',
    'sideBar.foreground': '#8f8c8c',
    'sideBarSectionHeader.background': '#121212',
    'sideBarSectionHeader.foreground': '#cfc6c6',
    'sideBarTitle.foreground': '#474747',

    'statusBar.background': '#121212',
    'statusBar.border': '#0d0c0c',
    'statusBar.debuggingBackground': '#6c6767',
    'statusBar.debuggingBorder': '#121212',
    'statusBar.debuggingForeground': '#fff5f5',
    'statusBar.foreground': '#6c6767',
    'statusBar.noFolderBackground': '#121212',
    'statusBar.noFolderBorder': '#0d0c0c',
    'statusBar.noFolderForeground': '#6c6767',
    'statusBarItem.activeBackground': '#1c1c1c',
    'statusBarItem.hoverBackground': '#1c1c1c',
    'statusBarItem.prominentBackground': '#373535',
    'statusBarItem.prominentHoverBackground': '#373535',

    // "symbolIcon.arrayForeground": "#fc618d",
    // "symbolIcon.booleanForeground": "#fc618d",
    // "symbolIcon.classForeground": "#5ad4e6",
    // "symbolIcon.colorForeground": "#948ae3",
    // "symbolIcon.constantForeground": "#948ae3",
    // "symbolIcon.constructorForeground": "#7bd88f",
    // "symbolIcon.enumeratorForeground": "#fd9353",
    // "symbolIcon.enumeratorMemberForeground": "#fd9353",
    // "symbolIcon.eventForeground": "#fd9353",
    // "symbolIcon.fieldForeground": "#fd9353",
    // "symbolIcon.fileForeground": "#c0b6b6",
    // "symbolIcon.folderForeground": "#c0b6b6",
    // "symbolIcon.functionForeground": "#7bd88f",
    // "symbolIcon.interfaceForeground": "#5ad4e6",
    // "symbolIcon.keyForeground": "#fd9353",
    // "symbolIcon.keywordForeground": "#fc618d",
    // "symbolIcon.methodForeground": "#7bd88f",
    // "symbolIcon.moduleForeground": "#5ad4e6",
    // "symbolIcon.namespaceForeground": "#5ad4e6",
    // "symbolIcon.nullForeground": "#948ae3",
    // "symbolIcon.numberForeground": "#948ae3",
    // "symbolIcon.objectForeground": "#5ad4e6",
    // "symbolIcon.operatorForeground": "#fc618d",
    // "symbolIcon.packageForeground": "#948ae3",
    // "symbolIcon.propertyForeground": "#fd9353",
    // "symbolIcon.referenceForeground": "#948ae3",
    // "symbolIcon.snippetForeground": "#7bd88f",
    // "symbolIcon.stringForeground": "#f25262",
    // "symbolIcon.structForeground": "#fc618d",
    // "symbolIcon.textForeground": "#f25262",
    // "symbolIcon.typeParameterForeground": "#fd9353",
    // "symbolIcon.unitForeground": "#948ae3",
    // "symbolIcon.variableForeground": "#5ad4e6",

    'tab.activeBackground': '#1c1c1c',
    'tab.activeBorder': '#1c1c1c',
    'tab.activeBorderTop': '#f25262',
    'tab.activeForeground': '#f4f4f4',
    'tab.border': '#121212',
    'tab.hoverBackground': '#1c1c1c',
    'tab.hoverBorder': '#1c1c1c',
    'tab.hoverForeground': '#dddddd',
    'tab.inactiveBackground': '#121212',
    'tab.inactiveForeground': '#606060',
    'tab.unfocusedActiveBorder': '#121212',
    'tab.unfocusedActiveBorderTop': '#606060',
    'tab.unfocusedActiveForeground': '#8f8c8c',
    'tab.unfocusedHoverBackground': '#1c1c1c',
    'tab.unfocusedHoverForeground': '#dddddd',
    'tab.unfocusedInactiveBackground': '#121212',
    'tab.unfocusedInactiveForeground': '#606060',

    'terminal.ansiBlack': '#282a36',
    'terminal.ansiBlue': '#8897f4',
    'terminal.ansiBrightBlack': '#414458',
    'terminal.ansiBrightBlue': '#556fff',
    'terminal.ansiBrightCyan': '#3fdcee',
    'terminal.ansiBrightGreen': '#18e3c8',
    'terminal.ansiBrightMagenta': '#b043d1',
    'terminal.ansiBrightRed': '#ff4971',
    'terminal.ansiBrightWhite': '#fdfdfd',
    'terminal.ansiBrightYellow': '#ff8037',
    'terminal.ansiCyan': '#79e6f3',
    'terminal.ansiGreen': '#5adecd',
    'terminal.ansiMagenta': '#c574dd',
    'terminal.ansiRed': '#f37f97',
    'terminal.ansiWhite': '#bebec1',
    'terminal.ansiYellow': '#f2a272',
    'terminal.background': '#101010',
    'terminal.foreground': '#94a3a5',
    'terminal.selectionBackground': '#48b9c750',
    'terminalCursor.background': '#00000000',
    'terminalCursor.foreground': '#f6f6f6',

    'textBlockQuote.background': '#373535',
    'textBlockQuote.border': '#373535',
    'textCodeBlock.background': '#373535',
    'textLink.activeForeground': '#fff5f5',
    'textLink.foreground': '#f25262',
    'textPreformat.foreground': '#fff5f5',
    'textSeparator.foreground': '#6c6767',

    'titleBar.activeBackground': '#121212',
    'titleBar.activeForeground': '#8f8c8c',
    'titleBar.border': '#0d0c0c',
    'titleBar.inactiveBackground': '#121212',
    'titleBar.inactiveForeground': '#474747',

    'tree.indentGuidesStroke': '#fff5f515',

    'walkThrough.embeddedEditorBackground': '#121212',

    'welcomePage.buttonBackground': '#121212',
    'welcomePage.buttonHoverBackground': '#0d0c0c',

    'widget.shadow': '#0d0c0c'
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: [
        'comment',
        'comment keyword',
        'comment markup.underline.link',
        'comment string',
        'comment punctuation.definition',
        'comment punctuation',
        'comment text'
      ],
      settings: {
        foreground: '#5c5757',
        fontStyle: 'italic'
      }
    },
    {
      scope: 'comment storage.type',
      settings: {
        foreground: '#5c5757'
      }
    },
    {
      scope: 'comment entity.name.type',
      settings: {
        foreground: '#5c5757'
      }
    },
    {
      scope: ['comment variable', 'comment variable.other'],
      settings: {
        foreground: '#5c5757'
      }
    },
    {
      scope: 'comment.git-status.header.remote',
      settings: {
        foreground: '#fc618d'
      }
    },
    {
      scope: 'comment.git-status.header.local',
      settings: {
        foreground: '#5ad4e6'
      }
    },
    {
      scope: 'comment.other.git-status.head',
      settings: {
        foreground: '#d7d7d7'
      }
    },
    {
      scope: 'constant',
      settings: {
        foreground: '#c8e1ff'
      }
    },
    {
      scope: 'constant.other',
      settings: {
        foreground: '#c8e1ff'
      }
    },
    {
      scope: 'constant.other.symbol',
      settings: {
        foreground: '#5ad4e6'
      }
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: '#c8e1ff'
      }
    },
    {
      scope: 'entity.name',
      settings: {
        foreground: '#fff5f5'
      }
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: '#b392f0'
      }
    },
    {
      scope: 'entity.name.section',
      settings: {
        foreground: '#f25262'
      }
    },
    {
      scope: [
        'entity.name.tag',
        'entity.name.tag.js.jsx support.class.component.js.jsx',
        'entity.name.tag support.class.component'
      ],
      settings: {
        foreground: '#b392f0'
      }
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#5ad4e6',
        fontStyle: 'italic'
      }
    },
    {
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.parent-selector-suffix.css',
        'entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css',
        'entity.other.attribute-name.css'
      ],
      settings: {
        foreground: '#b392f0',
        fontStyle: 'italic'
      }
    },
    {
      scope: 'entity.other.attribute-name.id.css',
      settings: {
        foreground: '#5ae6b7',
        fontStyle: 'italic'
      }
    },
    {
      scope: [
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.pseudo-class.css',
        'entity.other.pseudo-element.css'
      ],
      settings: {
        foreground: '#5ad4e6',
        fontStyle: 'italic'
      }
    },
    {
      scope: 'entity.other.git-status.hex',
      settings: {
        foreground: '#948ae3'
      }
    },
    {
      scope: 'invalid',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: 'keyword',
      settings: {
        foreground: '#f25262'
      }
    },
    {
      scope: [
        'keyword.operator',
        'keyword.operator.member',
        'keyword.operator.new'
      ],
      settings: {
        foreground: '#f25262'
      }
    },
    {
      scope: 'keyword.other.substitution',
      settings: {
        foreground: '#8b888f'
      }
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: '#f25262'
      }
    },
    {
      scope: 'markup.raw',
      settings: {
        foreground: '#fd9353'
      }
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline'
      }
    },
    {
      scope: 'markup.underline.link',
      settings: {
        foreground: '#5ad4e6'
      }
    },
    {
      scope: [
        'markup.inserted',
        'markup.inserted punctuation.definition.inserted'
      ],
      settings: {
        foreground: '#7bd88f'
      }
    },
    {
      scope: [
        'markup.deleted',
        'markup.deleted punctuation.definition.deleted'
      ],
      settings: {
        foreground: '#fc618d'
      }
    },
    {
      scope: [
        'markup.changed',
        'markup.changed punctuation.definition.changed'
      ],
      settings: {
        foreground: '#fce566'
      }
    },
    {
      scope: [
        'markup.ignored',
        'markup.ignored punctuation.definition.ignored'
      ],
      settings: {
        foreground: '#8b888f'
      }
    },
    {
      scope: 'markup.untracked',
      settings: {
        foreground: '#8b888f'
      }
    },
    {
      scope: 'markup.quote',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      scope: [
        'meta.brace.round',
        'meta.brace.square',
        'meta.brace.curly',
        'meta.delimiter.comma.js',
        'meta.function-call.without-arguments.js',
        'meta.function-call.method.without-arguments.js'
      ],
      settings: {
        foreground: '#888f88'
      }
    },
    {
      scope: [
        'meta.function-call.python',
        'meta.function-call.arguments.python meta.function-call.python'
      ],
      settings: {
        foreground: '#b392f0'
      }
    },
    {
      scope: 'meta.function-call.python meta.function-call.arguments.python',
      settings: {
        foreground: '#fff5f5'
      }
    },
    {
      scope: 'meta.object.member',
      settings: {
        foreground: '#fff5f5'
      }
    },
    {
      scope: 'meta.diff.git-diff.header',
      settings: {
        foreground: '#fce566'
      }
    },
    {
      scope: 'meta.separator.markdown',
      settings: {
        foreground: '#8b888f'
      }
    },
    {
      scope: 'punctuation',
      settings: {
        foreground: '#8b888f'
      }
    },
    {
      scope: [
        'punctuation.definition.variable',
        'punctuation.definition.keyword.scss',
        'punctuation.definition.entity.css'
      ],
      settings: {
        foreground: '#bab6c0'
      }
    },
    {
      scope: 'source',
      settings: {
        foreground: '#d7d7d7'
      }
    },
    {
      scope: ['source.scss', 'source.sass'],
      settings: {
        foreground: '#8f8888'
      }
    },
    {
      scope: [
        'source.sass variable.other',
        'source.sass variable.sass',
        'source.scss variable.other',
        'source.scss variable.scss',
        'source.scss variable.sass',
        'source.css variable.other',
        'source.css variable.scss',
        'source.less variable.other',
        'source.less variable.other.less',
        'source.less variable.declaration.less'
      ],
      settings: {
        foreground: '#fff5f5',
        fontStyle: 'italic'
      }
    },
    {
      scope: 'source.git-show.commit.sha',
      settings: {
        foreground: '#948ae3'
      }
    },
    {
      scope: [
        'source.git-show.author',
        'source.git-show.date',
        'source.git-diff.command',
        'source.git-diff.command meta.diff.git-diff.header.from-file',
        'source.git-diff.command meta.diff.git-diff.header.to-file'
      ],
      settings: {
        foreground: '#8b888f'
      }
    },
    {
      scope: [
        'source.git-show meta.diff.git-diff.header.extended.index.from-sha',
        'source.git-show meta.diff.git-diff.header.extended.index.to-sha'
      ],
      settings: {
        foreground: '#948ae3'
      }
    },
    {
      scope: 'source.git-show meta.diff.range.unified',
      settings: {
        foreground: '#fd9353'
      }
    },
    {
      scope: [
        'source.git-show meta.diff.header.from-file',
        'source.git-show meta.diff.header.to-file'
      ],
      settings: {
        foreground: '#8f8888'
      }
    },
    {
      scope: 'storage',
      settings: {
        foreground: '#5ad4e6'
      }
    },
    {
      scope: ['storage.modifier', 'storage.type.modifier'],
      settings: {
        foreground: '#f25262',
        fontStyle: 'italic'
      }
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: '#5ad4e6',
        fontStyle: 'italic'
      }
    },
    {
      scope: 'storage.type.function.arrow',
      settings: {
        foreground: '#f25262',
        fontStyle: ''
      }
    },
    {
      scope: 'string',
      settings: {
        foreground: '#86b1e6'
      }
    },
    {
      scope: 'string source',
      settings: {
        foreground: '#fff5f5'
      }
    },
    {
      scope: [
        'string.regexp punctuation.definition.string.begin',
        'string.regexp punctuation.definition.string.end'
      ],
      settings: {
        foreground: '#f25262'
      }
    },
    {
      scope: 'support.constant',
      settings: {
        foreground: '#5ad4e6'
      }
    },
    {
      scope: 'support.function',
      settings: {
        foreground: '#5ae6b7'
      }
    },
    {
      scope: ['support.type', 'entity.name.type.object.console'],
      settings: {
        foreground: '#5ad4e6',
        fontStyle: 'italic'
      }
    },
    {
      scope: 'support.type.property-name',
      settings: {
        foreground: '#c8e1ff',
        fontStyle: ''
      }
    },
    {
      scope: 'support.variable',
      settings: {
        foreground: '#5ad4e6'
      }
    },
    {
      scope: 'support.class',
      settings: {
        foreground: '#5ad4e6'
      }
    },
    {
      scope: 'text',
      settings: {
        foreground: '#fff5f5'
      }
    },
    {
      scope: ['variable'],
      settings: {
        foreground: '#fff5f5'
      }
    },
    {
      scope: ['variable.parameter', 'parameters variable.function'],
      settings: {
        foreground: '#bab6c0',
        fontStyle: 'italic'
      }
    },
    {
      scope: [
        'variable.language',
        'variable.parameter.function.language.special.self.python',
        'variable.parameter.function.language.special.cls.python'
      ],
      settings: {
        foreground: '#bab6c0',
        fontStyle: 'italic'
      }
    },
    {
      scope: ['variable.other.object'],
      settings: {
        foreground: '#bab6c0'
      }
    },
    {
      scope: [
        'variable.other.constant',
        'variable.other.property',
        'variable.other.object.property'
      ],
      settings: {
        foreground: '#c8e1ff'
      }
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#316BCD'
      }
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#cd9731'
      }
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#f44747'
      }
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#b267e6'
      }
    }
  ]
};
