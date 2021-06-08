import React, { useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';

import { Add } from 'grommet-icons/icons/Add';
import { FormSubtract } from 'grommet-icons/icons/FormSubtract';

import { defaultProps } from '../../default-props';

import { InfiniteScroll } from '../InfiniteScroll';
import { Text } from '../Text';
import { Box } from '../Box';
import { Button } from '../Button'

import { OptionsBox, SelectOption } from './StyledMultiSelect';
import { OptionWithCheckControl } from './OptionWithCheckControl';
import { OptionChips } from './OptionChips';
import { ControlButton } from './ControlButton';
import { Searchbox } from './Searchbox';
import { CustomMultiSelect } from './CustomMultiSelect';

const SELECT_ALL_INDEX = -1;

const ColumnSelect = ({
  options,
  value,
  isSelected,
  isDisabled,
  selectOption,
  onMore,
  replace,
  activeIndex,
  onActiveOption,
  optionLabel,
  optionValue,
  onCancel,
  onOk,
  layout,
  width,
  height,
  emptySearchMessage,
  showSelectAll,
  showOptionChips,
  showControlButtons,
  inclusionExclusion,
  isExcluded,
  setIncExcVal,
  renderSearch,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  renderEmptySelected,
  onValueChange,
  custom,
  validate,
  onChange,
  showSelectAllOnSearch,
  multiSearchDelimiter,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const selectOptionsStyle = {
    ...theme.select.options.box,
    ...theme.select.options.container,
  };

  const allSelected =
    options && options.every((item, index) => isSelected(index));

  const setOption = useCallback(
    (event, type, index) => {
      setIncExcVal(type);
      if (index !== SELECT_ALL_INDEX) {
        selectOption(index)(event);
      } else {
        onChange({
          value: allSelected ? [] : options.map((item, i) => optionValue(i)),
          selected: allSelected ? [] : options.map((item, i) => i),
        });
      }
    },
    [allSelected, onChange, optionValue, options, selectOption, setIncExcVal],
  );

  const optionSelect = useCallback(
    (event, index) => {
      if (inclusionExclusion && value.length === 1 && isSelected(index))
        setIncExcVal(null);
      selectOption(index)(event);
    },
    [inclusionExclusion, isSelected, selectOption, setIncExcVal, value],
  );

  const setUnsetChips = useCallback(
    updatedValues => {
      if (inclusionExclusion && !updatedValues.length) setIncExcVal(null);
      onChange({
        value: updatedValues,
      });
    },
    [inclusionExclusion, setIncExcVal, onChange],
  );

  const selectAllButtonsCondition = (isSelectAll = false) => {
    if (isSelectAll) {
      return (
        !allSelected &&
        !inclusionExclusion &&
        showSelectAll &&
        (!showSelectAllOnSearch ||
          (showSelectAllOnSearch && searchValue !== '')) &&
        (!showSelectAllOnSearch ||
          (showSelectAllOnSearch &&
            (!multiSearchDelimiter ||
              (multiSearchDelimiter &&
                searchValue.includes(multiSearchDelimiter)))))
      );
    }
    return (
      !allSelected &&
      showSelectAll &&
      inclusionExclusion &&
      (isExcluded === null || isExcluded !== null) &&
      (!showSelectAllOnSearch ||
        (showSelectAllOnSearch && searchValue !== '')) &&
      (!showSelectAllOnSearch ||
        (showSelectAllOnSearch &&
          (!multiSearchDelimiter ||
            (multiSearchDelimiter &&
              searchValue.includes(multiSearchDelimiter)))))
    );
  };

  const renderOptionChips = () => (
    <OptionChips
      width={width}
      height={height || 'small'}
      options={options}
      value={value}
      isSelected={isSelected}
      optionLabel={optionLabel}
      onRemove={optionSelect}
      clearAll={setUnsetChips}
      inclusionExclusion={inclusionExclusion}
      isExcluded={isExcluded}
      renderEmptySelected={renderEmptySelected}
      layout={layout}
      showSelectAll={showSelectAll}
    />
  );

  if (custom) {
    return (
      <CustomMultiSelect
        value={value}
        layout={layout}
        onValueChange={onValueChange}
        renderSearch={renderSearch}
        placeholder={searchPlaceholder}
        renderEmptySelected={renderEmptySelected}
        width={width}
        height={height}
        custom={custom}
        isExcluded={isExcluded}
        setIncExcVal={setIncExcVal}
        inclusionExclusion={inclusionExclusion}
        validate={validate}
        onCancel={onCancel}
      />
    );
  }

  return (
    <Box {...theme.multiselect.container} width={width}>
      {renderSearch && (
        <Searchbox
          reverse={false}
          width={width}
          placeholder={searchPlaceholder}
          value={searchValue}
          onValueChange={onSearchChange}
          layout={layout}
          selectIcon={theme.select.icons}
          onCancel={onCancel}
        />
      )}
      <Box direction="row" height={height || 'small'}>
        <Box
          width={layout === 'single-column' ? '100%' : '50%'}
          pad={showSelectAll ? { top: 'small' } : { vertical: 'small' }}
        >
          <OptionsBox role="menubar" tabIndex="-1" {...theme.multiselect.custom.textAreaWrap}>
            {options.length > 0 ? (
              <InfiniteScroll
                items={options}
                step={theme.select.step}
                onMore={onMore}
                replace={replace}
                show={activeIndex !== -1 ? activeIndex : undefined}
              >
                {(option, index, optionRef) => {
                  const optionDisabled = isDisabled(index);
                  const optionSelected = isSelected(index);
                  const optionActive = activeIndex === index;
                  return (
                    <>
                      <SelectOption
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        ref={optionRef}
                        tabIndex="-1"
                        role="menuitem"
                        a11yTitle={`option id - ${option.id}`}
                        hoverIndicator={theme.select.activeColor}
                        disabled={optionDisabled || optionSelected || undefined}
                        active={optionActive}
                        selected={optionSelected}
                        option={option}
                        plain
                        onMouseOver={
                          !optionDisabled ? onActiveOption(index) : undefined
                        }
                        onClick={
                          (!optionDisabled && !inclusionExclusion) ||
                          (!optionDisabled &&
                            inclusionExclusion &&
                            isExcluded !== null)
                            ? event => optionSelect(event, index)
                            : undefined
                        }
                      >
                        <OptionWithCheckControl
                          selected={optionSelected}
                          label={optionLabel(index)}
                          inclusionExclusion={inclusionExclusion}
                          isExcluded={isExcluded}
                          index={index}
                          onSelect={setOption}
                          active={optionActive}
                        />
                      </SelectOption>
                    </>
                  );
                }}
              </InfiniteScroll>
            ) : (
              <SelectOption
                key="search_empty"
                tabIndex="-1"
                role="menuitem"
                hoverIndicator="background"
                disabled
                option="No values available"
              >
                <Box {...selectOptionsStyle}>
                  <Text {...theme.select.container.text}>
                    {emptySearchMessage || 'No values available'}
                  </Text>
                </Box>
              </SelectOption>
            )}
          </OptionsBox>
          {selectAllButtonsCondition(true) && (
              <Box
                {...theme.multiselect.custom.actions.wrapper}
                border="top"
                justify="start"
              >
                <Box>
                  <Button
                    color={theme.global.colors.brand}
                    onClick={() => {
                      setUnsetChips(
                        options.reduce((acc, item, ind) => {
                          if (!isDisabled(ind)) acc.push(optionValue(ind));
                          return acc;
                        }, []),
                      );
                    }}
                  >
                    <Box align="center" direction="row">
                      <Text margin={{ left: 'small' }}>
                        SELECT ALL
                      </Text>
                    </Box>
                  </Button>
                </Box>
              </Box>
            )}
          { selectAllButtonsCondition() && (
              <Box
                {...theme.multiselect.custom.actions.wrapper}
                border="top"
                justify={[true,false].includes(isExcluded) ? 'start' : 'evenly'}
              >
                {[null, false].includes(isExcluded) && (
                  <Button
                    {...theme.multiselect.includeBtn}
                    onClick={event => {
                      setOption(event, false, SELECT_ALL_INDEX);
                      setUnsetChips(
                        options.reduce((acc, item, ind) => {
                          if (!isDisabled(ind)) acc.push(optionValue(ind));
                          return acc;
                        }, []),
                      );
                    }}
                  >
                    <Box align="center" justify="center" direction="row">
                      <Add
                        {...theme.multiselect.checkbox.checkmark}
                        color={theme.multiselect.includeBtn.color}
                        size="small"
                      />
                      <Text margin={{ left: 'small' }}>
                        INCLUDE ALL
                      </Text>
                    </Box>
                  </Button>
                )}
                {!allSelected && isExcluded === null && (
                  <Box background="light-3" width="1px" height="100%" />
                )}

                {[null, true].includes(isExcluded) && (
                  <>
                    <Button
                      {...theme.multiselect.excludeBtn}
                      onClick={event => {
                        setOption(event, true, SELECT_ALL_INDEX);
                        setUnsetChips(
                          allSelected
                            ? []
                            : options.reduce((acc, item, ind) => {
                                if (!isDisabled(ind))
                                  acc.push(optionValue(ind));
                                return acc;
                              }, []),
                        );
                      }}
                    >
                      <Box align="center" justify="center" direction="row">
                        <FormSubtract
                          {...theme.multiselect.checkbox.checkmark}
                          color={theme.multiselect.excludeBtn.color}
                          size="small"
                        />
                        <Text margin={{ left: 'small' }}>
                          EXCLUDE ALL
                        </Text>
                      </Box>
                    </Button>
                  </>
                )}
              </Box>
            )}
        </Box>
        {layout === 'double-column' && (
          <Box
            width="50%"
            border={[
              { side: 'left', color: theme.multiselect.rightPanel.border },
            ]}
          >
            {renderOptionChips()}
          </Box>
        )}
      </Box>
      {showOptionChips && layout === 'single-column' && renderOptionChips()}
      {showControlButtons && <ControlButton onOk={onOk} onCancel={onCancel} />}
    </Box>
  );
};

export { ColumnSelect };
