# Change Log

## [12.10.0] - 2020-04-01

-   Create `SelectionTag` component
-   Add `className` property to `ListingProductListSelector`

## [12.9.0] - 2020-04-01

-   Create `PropertyNavigationSidebar` component

## [12.8.0] - 2020-03-27

-   Add onBlur event listener to `CustomTextArea` component

## [12.7.2] - 2020-03-26

-   Style adjustments for `ListSelector` component

## [12.7.1] - 2020-03-26

-   Style fixes for `ListingProductListSelector` and `ListSelector` component

## [12.7.0] - 2020-03-25

-   Adjust `className` in `CloseIcon` component

## [12.6.0] - 2020-03-25

-   Refactor `CloseIcon` component

## [12.5.0] - 2020-03-24

-   Add `InfoTipContainer` component

## [12.4.0] - 2020-03-24

-   Export `CloseIcon` in `bit`

## [12.3.3] - 2020-03-24

-   Label prop removed from `RichContentArticle`

## [12.3.2] - 2020-03-24

-   Style adjustments for `CustomCounter`

## [12.3.1] - 2020-03-24

-   `RichContentArticle` component exported.

## [12.3.0] - 2020-03-24

-   Add `RichContentArticle` component.

## [12.2.4] - 2020-03-23

-   Style adjustments in `LayoutContainer` for `CloseIcon`

## [12.2.3] - 2020-03-23

-   Style adjustments in `LayoutContainer` for `CloseIcon`

## [12.2.2] - 2020-03-23

-   Style adjustments in `ModalDesktop` for `CloseIcon`

## [12.2.1] - 2020-03-23

-   Style adjustments in `LayoutContainer` for `CloseIcon`

## [12.2.0] - 2020-03-23

-   Use `CloseIcon` in `ModalDesktop` component
-   Style adjustments in `LayoutContainer`

## [12.1.0] - 2020-03-23

-   Add `CloseIcon` component
-   Use `CloseIcon` in `LayoutContainer` and `ModalMobile` components

## [12.0.0] - 2020-03-20

-   Refactor `ListingProductListSelector` and `ListingProductGridCard` to allow adding different listing options

## [11.4.1] - 2020-03-17

-   Style adjustments for `ListingProductListSelector`

## [11.4.0] - 2020-03-17

-   Add property `acceptedTypes` to `DocumentDropTargetComponent` and `AtachmentsEditor` to decide which document types are accepted

## [11.3.0] - 2020-03-16

-   Remove box shadow from `TopBar` component.

## [11.2.1] - 2020-03-16

-   Use `ListGridCard` in `ListingLoadingCard` component

## [11.2.0] - 2020-03-13

-   Add 'active' label to `ListingProductListSelector`

## [11.1.1] - 2020-03-12

-   Update style of 'active-plan' label according to designs

## [11.1.0] - 2020-03-11

-   Add 'active' label to `ListGridCard` and `ListingProductCard`

## [11.0.8] - 2020-03-11

-   Add missing class `flex-1` and replace missing `position-flex-center` with bootstrap classes

## [11.0.7] - 2020-03-10

-   Add `ListSelector` component
-   Add `ListingCardListSelector` component
-   Use `ListGridCard` in `ListingProductCard` component
-   Border style improvement for selected `ListGridCard`

## [11.0.6] - 2020-03-10

-   Fix `TopBar` desktop fixed position bug

## [11.0.5] - 2020-03-09

-   Fix `Text content did not match. Server Side Rendering Styles` warning in `TopBar` component.

## [11.0.4] - 2020-03-09

-   Fix `TopBar` component styles.

## [11.0.3] - 2020-03-09

-   Fix `TopBar` component styles.

## [11.0.2] - 2020-03-06

-   Scope `TopBar` component styles.

## [11.0.1] - 2020-03-06

-   Remove global span style in `TopBar` user context menu.

## [11.0.0] - 2020-03-05

#### Breaking Change

-   Remove `style-variables` and migrate all components to use variables in `@zenhomes/ui`.

#### Additions

-   Add `TopBar` component. Check [README](./src/components/top-bar/README.md) for how to use.
-   Export `MainNavigationContent`,`MainNavigationLogo`, `MainNavigationContextMenu` and `MobileBottomNavigation` for top bar composition. See [HERE](https://github.com/zenhomes/portal-frontend/pull/5401/files#diff-0141e0a9b9353c6bc62e5846e0d7252dR13) for more information.
-   Initialize [bit](https://bit.dev/zenhomes/react-components) for components distribution.

## [10.4.1] - 2020-03-04

-   Fix styles of `Checkbox` component.

## [10.4.0] - 2020-03-02

-   Modified `ListingProductCard` component to include status label

## [10.3.1] - 2020-02-27

-   Adjust logo size in `SideNavbar` component.

## [10.3.0] - 2020-02-26

-   Add `StatusBadge` component
-   Add `StatusIcon` component

## [10.2.1] - 2020-02-21

-   Adjust placeholder styles in `CustomInput`and `CustomTextArea`.

## [10.2.0] - 2020-02-20

-   Add counter for parent nodes in `MultiSteps` component.

## [10.1.0] - 2020-02-19

-   Add hidden step feature to `MultiSteps` component.

## [10.0.0] - 2020-02-19

-   Remove buggy `MultiStepsList` component.
-   Create new `MultiSteps` component aligned with requirements listed [HERE](https://app.nuclino.com/Zenhomes/Tech/Collapsable-navigation-77046acf-2a79-4df8-8ad3-78f7b19e026b)
-   See [HERE](./migrations/10.0-migration.md) for migration guide.

## [9.3.1] - 2020-02-18

-   Fix boolean click issue on `ListGridCard` component onclick

## [9.3.0] - 2020-02-18

-   Add disabled state and adjust box shadow in `ListGridCard` component

## [9.2.0] - 2020-02-18

-   Add `ListGridCard` component

## [9.1.1] - 2020-02-17

-   Added missing `onChange` event handler to `Toggle` component

## [9.1.0] - 2020-02-12

-   Expose `LayoutContainer`'s main content container ref for easier view manipulation like scroll reset, etc. Below is a sample usage:

```typescript
import React from 'react';
import { LayoutContainer } from '@zenhomes/react-shared';

export class Consumer extends React.Component {
    private mainContentContainerRef = React.createRef<HTMLDivElement>();

    render() {
        return <LayoutContainer ref={this.mainContentContainerRef} />;
    }
}
```

## [9.0.0] - 2020-02-10

-   Change behaviour of `CustomCounter` component: remove `isNegativeValueAllowed` property, and alter sanitization of values
-   See [HERE](./migrations/9.0-migration.md) for migration guide.

## [8.3.0] - 2020-02-10

-   Add `MobileTooltip`component

## [8.2.2] - 2020-02-03

-   Make `ListingProductCard` responsive

## [8.2.1] - 2020-02-03

-   Set width of `LayoutContainer` `step-columns_left`to `100vw` on mobile and tablet

## [8.2.0] - 2020-02-06

-   Added new component `EmptyValuePlaceholder`

## [8.1.2] - 2020-02-05

-   Fix `LayoutContainer` footer positioning on mobile

## [8.1.1] - 2020-02-03

-   Fix transparent footer secondary button styles affecting other outline buttons.

## [8.1.0] - 2020-02-03

-   Update `LayoutContainer` with transparent footer. (Temporary Fix)

## [8.0.1] - 2020-02-03

-   Export `AttachmentThumbnailComponent` and `ImageThumbnail`

## [8.0.0] - 2020-01-31

-   Deprecate `FooterNavigation` component
-   Add `FlowFooterNavigation` component
-   See [HERE](./migrations/8.0-migration.md) for migration guide.

## [7.5.0] - 2020-01-30

-   Restyle `Toggle` component

## [7.4.1] - 2020-01-28

-   Update `DatePicker` height from `2.5rem` to `3rem`

## [7.4.0] - 2020-01-28

-   Add default sub steps expansion to `MultiStepsList`
-   Add `hidden` and `checked` options to `MultiStepsList` items

## [7.3.0] - 2020-01-24

-   Add `delay` option to `useScrollIntoView` hook

## [7.2.0] - 2020-01-23

-   Improve Modal component:
    -   Added wrapper for Desktop and Mobile modal
    -   Removed conditional props from mobile modal and replaced with 'children' prop so that consumers decide how their modal needs to render on mobile as well

## [7.1.3] - 2020-01-22

-   Fix `CustomCounterWrapper` component: pass maxValue prop to the underlying component

## [7.1.2] - 2020-01-22

-   Change height of `Divider` to `1px` to allow rendering multiple instances on one page

## [7.1.0] - 2020-01-21

-   Introduce `MultiStepsList` - a simplified SideNavigation step list with nested steps support

## [7.0.1] - 2020-01-21

-   Added UI fixes: - Add `contentWidthXLPercent` prop to `MainContentBody` - Add `className` prop and fix the height of `MainContentHeader` - Fix `MainContent`story

## [7.0.0] - 2020-01-20

-   Introduce `ButtonPending` - a button component with a spinner icon for pending states
-   Adjust `FooterNavigation` to get completeButton as several props, not `React.Node`
-   Introduce local state in footer components that saves which button got clicked most recently
-   Use local state and new pending props to show spinning icons within buttons
-   Introduce components `LoadingSpinner` and `LoadingSpinnerLabelled`

## [6.0.4] - 2020-01-15

-   Fix height of `LayoutContainer` `step-columns-left-body` to be always fullscreen

## [6.0.3] - 2020-01-15

-   Fix global css style bug in `DocumentDropTargetComponent` component

## [6.0.2] - 2020-01-14

-   Added UI fixes: - Removed drop-shadow from footer component (according to design request) - Fixed format of floor label in `FloorCounter` component

## [6.0.1] - 2020-01-14

-   See `6.0.0`.

## [6.0.0] - 2020-01-14

-   Refactor `LayoutContainer` and remove layouting from its child components

## [5.6.1] - 2020-01-13

-   Fix global css style bug in `DocumentDropTargetComponent` component

## [5.6.0] - 2020-01-09

-   Added new component `ListingLoadingCard` to be used in rental journey apps

## [5.5.2] - 2020-01-09

-   Synced `5.5.1` with `5.5.2`

## [5.5.1] - 2020-01-09

-   Fixed `CustomInput` component `input-label` width style

## [5.5.0] - 2020-01-08

-   Renamed `ShopCard` component to `ListingProductCard`
-   Revised the UI for the listing card

## [5.4.3] - 2020-01-06

-   Remove `defaultValue` usage from `CustomSelect` component

## [5.4.2] - 2020-01-03

-   Added `canDragImages` prop to `AttachmentsEditor` component
-   Added `DnD` to `AttachmentsEditor` component

## [5.4.1] - 2019-12-19

-   Added `multiple` and `fileIconUrl` props to `AttachmentsEditor` component
-   Fixed overflowing height bug for `DocumentDropTargetComponent` component

## [5.4.0] - 2019-12-18

-   Fixed default state for `CustomSwitch` component

## [5.3.4] - 2019-12-16

-   Added wrapper div to fix styling issue in `ModalDesktop` component - to render styles properly
-   Fixed circular dependency issue in `CustomCounterWrapper` and `FloorCounterWrapper` components

## [5.3.3] - 2019-12-16

-   Fixed style for `ModalDesktop` component to make it render on screen

## [5.3.2] - 2019-12-13

-   Removed `jsx` tag from style block of `FloorCounterWrapper` and `CustomCounterWrapper`

## [5.3.1] - 2019-12-12

-   Export `FloorCounterWrapper` and `CustomCounterWrapper` component from the library

## [5.3.0] - 2019-12-12

-   Added `FloorCounterWrapper` and `CustomCounterWrapper` component

## [5.2.0] - 2019-12-12

-   Add `ModalDesktop` component
-   Add `ModalMobile` component

## [5.1.0] - 2019-12-09

-   Add `AttachmentsEditor` component

## [5.0.1] - 2019-12-09

-   Layout changes for `LayoutContainer` and `MainContentBody`

## [4.0.0] - 2019-12-09

-   Remove skip options from `FooterNavigation`
-   Add `disable next` option to `FooterNavigation`

## [3.28.7] - 2019-12-06

-   Add disabled state to `NextStepItem`

## [3.28.6] - 2019-12-06

-   refactor `GoogleAddressAutoCompleteInput`

## [3.28.5] - 2019-12-05

-   Add a shadow to `MobileFooterNavigation` and `DesktopFooterNavigation`
-   Fix the `MobileFooterNavigation` to make it position fixed to bottom of the page

## [3.28.4] - 2019-12-05

-   Change `LayoutContainer` styles
-   Change `MainContentBody` styles

## [3.28.3] - 2019-12-05

-   Add `useEffect` for initialization

## [3.28.2] - 2019-12-04

-   Change style in `LayoutContainer`

## [3.28.1] - 2019-12-04

-   Change style in `MainContentBody`

## [3.28.0] - 2019-12-04

-   Add `AutoScrollIntoView` component
-   Add `useDetectChanges` hook with tests
-   Add `useScrollIntoView` hook
-   Add `smooth-scroll-into-view-if-needed` package as a dependency.

## [3.27.11] - 2019-12-04

-   Fix `GoogleAddressAutoCompleteInput` for `SSR`
-   Add `type` for `googlemaps`
-   Add `ref` to `CustomInput`

## [3.27.10] - 2019-12-04

-   `CustomCounter` zero default value fix

## [3.27.9] - 2019-12-03

-   rm `pointer` css class from `StepListItem`

## [3.27.7] - 2019-12-03

-   Make `LabelWithTooltip` tooltip icon grey
-   Hide tooltip icon on mobile
-   Only trigger tooltip on icon hover

## [3.27.6] - 2019-12-03

-   Style fixes about `Checkbox` component inside `ShopCard`

## [3.27.5] - 2019-12-03

-   Style fixes inside `ShopCard`

## [3.27.4] - 2019-12-03

-   Add `key` prop to child element inside `ShopCard`

## [3.27.3] - 2019-12-03

-   Fix mandatory content prop warning for `LabelWithTooltip` component

## [3.27.2] - 2019-12-03

-   Fix mapping inside ShopCard

## [3.27.1] - 2019-12-03

-   Remove jsx style tags

## [3.27.0] - 2019-12-03

-   Added component `ShopCard`.

## [3.26.0] - 2019-12-03

-   Add `LabelWithTooltip` component

## [3.25.8] - 2019-11-29

-   `CustomSelect` children type & `LayoutContainer` story fix.

## [3.25.7] - 2019-11-29

-   UI fix for `MobileFooterNavigation`.

## [3.25.6] - 2019-11-29

-   Add prop `completeButton` to `FooterNavigation` and `MobileFooterNavigation`.

## [3.25.4] - 2019-11-29

-   Add optional `companyLogoClick` prop to `SideNavbar`.

## [3.25.3] - 2019-11-29

-   Add hover effect to valid `NextStepItem`.

## [3.25.2] - 2019-11-29

-   Fix `LayoutContainer` scroll bug

## [3.25.1] - 2019-11-28

-   remove `jsx` attributes from inline `<style />` tags

## [3.25.0] - 2019-11-28

-   remove `title` prop from `CustomInput` component.
-   Add component `CustomLabel`.

## [3.24.2] - 2019-11-28

-   Require mobile header to be passed as prop for in `LayoutContainer`.
-   Have header not rendered absolutely.

## [3.24.1] - 2019-11-28

-   Fix mobile layout issues in `LayoutContainer`, `FooterNavigation` and apply opacity to `SideNavbar` icon.

## [3.24.0] - 2019-11-28

-   Add component `MainContentBody`.

## [3.23.2] - 2019-11-28

-   Add prop `isValid` to `NextStepItem` which defaults to `true`.

## [3.23.1] - 2019-11-28

-   Added exports for `divider` and `MainContentHeader` components

## [3.23.0] - 2019-11-28

-   Added component `MainContentHeader`

## [3.22.0] - 2019-11-28

-   Added component `Divider`

## [3.21.0] - 2019-11-28

-   Added component `MobileNavbar`

## [3.20.2] - 2019-11-27

-   Changed the styling of CustomInput, classes now applied to the top level container

## [3.20.1] - 2019-11-27

-   Prevented `CustomCounter` component from rendering `0` when no value is provided

## [3.20.0] - 2019-11-27

-   Added component `LayoutContainer`

## [3.19.0] - 2019-11-27

-   `CustomInput` component is using bootstrap styles again + bootstrap support for storybook

## [3.18.2] - 2019-11-27

-   Added component `SideNavbar`

## [3.17.5] - 2019-11-27

-   Changed className for `CustomInput`, changed font size for `CustomInput` `title`

## [3.17.4] - 2019-11-27

-   Added component `ErrorLabel`

## [3.17.3] - 2019-11-27

-   Added component `StepListItem`

## [3.16.0]

-   Changed `CustomInput` component added `title` and `inputLabel` props

## [3.15.1] - 2019-11-27

-   Added skip button options to `FooterNavigation`

## [3.15.0] - 2019-11-27

-   Added component `GoogleAddressAutoCompleteInput`

## [3.14.2] - 2019-11-27

-   Added component `NextStepItem`

## [3.13.1] - 2019-11-26

-   Styles refactoring in `CustomInput`

## [3.12.0] - 2019-11-26

-   Added component `FloorCounter`

## [3.9.0] - 2019-11-15

-   Added component `Checkbox`

## [3.8.2] - 2019-11-14

-   Simplify `PropertyTypeButton`

## [3.8.0] - 2019-11-14

-   Added component `PropertyTypeButton`

## [3.7.3] - 2019-11-14

### Updated

-   Added `readOnly` attribute to input in `Toggle` component to solve React rendering errors.

## [3.7.1] - 2019-11-14

### Updated

-   Exported `Toggle` component from the library

## [3.7.0] - 2019-11-14

### Added

-   Added new component `Toggle`

## [3.6.2]

### Updated

-   changed `formatPriceAmount` util to use accounting library

## [3.6.1] - 2019-10-17

-   Fix wrong color usage for `blue800`: `#004dcb - #0037FF` and `green800`: `#006242 - #00A63D`

## [3.6.0]

-   Added colors inside `DatePicker` component from our design system

## [3.5.0]

-   Added new component `DatePicker`

## [3.4.1]

### Updated

-   changed responsive dialog height to min-height

## [3.4.0]

-   Updated `@zenhomes/ui` package version to remove deprecated colors
-   Updated colors refs used in the components exposed by this package

## [3.1.6]

### Added

-   Update UI package -> added `blackBase900` color -> removed duplicate colors
-   Updated command for running the update script in package.json file

## [3.1.5]

### Added

-   Added script for updating Colors enum file

### Removed

-   Removed Colors enum from the style-variables file and moved it to its own file

## [3.1.4]

### Added

-   Added `yellowOrange` to Colors style-variables

## [3.1.3]

### Added

-   Added `gold` to Colors style-variables

## [3.1.2]

### Added

-   Added `zumthor` to Colors style-variables

## [3.1.1]

### Added

-   Added `deepSea` to Colors style-variables

## [3.1.0]

### Added

-   The `useCheckMobile` hook

## [3.0.0]

Moved the file viewer to a separate repo [https://github.com/zenhomes/react-file-viewer](https://github.com/zenhomes/react-file-viewer)

### Removed

-   The `FileViewer` component and all related utils
