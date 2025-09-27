import { Dimensions, StyleSheet } from 'react-native';
import {colors} from './colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: colors.mintGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 18,
    color: colors.text,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: "white",
    height: 40,
    width: width/3
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 20,
    color: colors.gray,
    marginLeft: 4,
  },
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreText: {
    fontSize: 18,
    color: colors.text,
  },
  scrollContent: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    padding: 2,
    borderColor: "white"
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 2,
    width: width/4
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  inactiveTab: {
    // backgroundColor: colors.lightGray,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: colors.white,
  },
  inactiveTabText: {
    color: colors.red,
  },
  section: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGray,
    width: width
  },
  dropdownText: {
    fontSize: 16,
    color: colors.text,
  },
  dropdownArrow: {
    fontSize: 20,
    color: "black",
    padding: 15,
  },
  dropdownInput: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    fontSize: 16,
    backgroundColor: '#fff',
    width: '100%',
    minWidth: width/1.5,
  },
  // section: {
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     marginBottom: 5,
//   },
//   dropdownArrow: {
//     fontSize: 16,
//     color: '#888',
//     marginRight: 10,
//   },
  priceSection: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  priceContainer: {
    flex: 1,
    marginRight: 12,
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  priceButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceButtonText: {
    fontSize: 18,
    color: colors.gray,
  },
  priceInput: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: colors.text,
  },
  sizeContainer: {
    flex: 1,
  },
  amountLabel: {
    fontSize: 12,
    color: colors.gray,
    textAlign: 'right',
    marginBottom: 4,
  },
  sizeInputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGray,
    alignItems: 'center',
  },
  sizeInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    paddingLeft: 5,
    paddingRight: 10,
  },
  qtyContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGray,
    justifyContent: "center"
  },
  qtyText: {
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0,
    paddingHorizontal: 4,
  },
  qtyArrow: {
    fontSize: 16,
    color: colors.gray,
    marginLeft: 4,
  },
  qtyDropdown: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    width: 40
  },
  sliderContainer: {
    marginBottom: 24,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderThumb: {
    backgroundColor: colors.primary,
    width: 20,
    height: 20,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,
  },
  sliderLabel: {
    fontSize: 12,
    color: colors.gray,
  },
  tpslToggle: {
    marginBottom: 30,
  },
  tpslDropdownArrow: {
    fontSize: 16,
    color: colors.gray,
    padding: 0,
  },
  tpslSection: {
    // backgroundColor: colors.white,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: colors.lightGray,
    marginTop: 15,
  },
  tpslHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tpslHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tpslHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tpslHeaderText: {
    fontSize: 14,
    color: colors.text,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: colors.gray,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  tpslContent: {
    marginTop: 10,
  },
  tpslRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tpslItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  tpslLabel: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 8,
  },
  tpslInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGray,
    height: 40,
  },
  tpslInputText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  tpslInputLabel: {
    fontSize: 12,
    color: colors.gray,
    marginRight: 4,
  },
  advancedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  advancedButtonText: {
    color: colors.primary,
    fontSize: 14,
    marginRight: 4,
  },
  advancedIcon: {
    fontSize: 14,
  },
  bottomSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  balanceInfo: {
    marginBottom: 16,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 4,
  },
  balanceLabel: {
    fontSize: 14,
    color: colors.gray,
    flex: 1,
  },
  balanceValue: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  addFunds: {
    fontSize: 14,
    color: colors.primary,
    marginLeft: 8,
  },
  feeValue: {
    fontSize: 14,
    color: colors.gray,
  },
  previewButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  previewButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  // Stock Selector Modal Styles
  stockSelectorOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockSelectorModal: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: width * 0.9,
    maxHeight: height * 0.7,
    paddingBottom: 20,
  },
  stockSelectorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  stockSelectorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  stockSelectorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  stockSelectorItemSelected: {
    backgroundColor: colors.background,
  },
  stockSelectorItemLeft: {
    flex: 1,
    marginRight: 12,
  },
  stockSelectorTicker: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  stockSelectorName: {
    fontSize: 12,
    color: colors.gray,
  },
  selectedIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCheckmark: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Add Funds Modal Styles
  addFundsInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addFundsLabel: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 8,
  },
  addFundsInput: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.lightGray,
    textAlign: 'center',
  },
  addFundsButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 12,
  },
  addFundsCancelButton: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  addFundsCancelText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  addFundsConfirmButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  addFundsConfirmText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  // Keypad Modal Styles (keeping existing for compatibility)
  keypadOverlay: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  keypadContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34,
    maxHeight: height*0.5,
  },
  keypadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  keypadTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  keypadClose: {
    fontSize: 24,
    color: colors.gray,
  },
  keypadDisplay: {
    padding: 20,
    alignItems: 'center',
  },
  keypadValue: {
    fontSize: 32,
    fontWeight: '300',
    color: colors.text,
  },
  keypadGrid: {
    paddingHorizontal: 20,
  },
  keypadRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  keypadButton: {
    flex: 1,
    height: 60,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    borderRadius: 8,
  },
  keypadSpecial: {
    backgroundColor: colors.lightGray,
  },
  keypadButtonText: {
    fontSize: 24,
    color: colors.text,
  },
  keypadSpecialText: {
    color: colors.darkGray,
  },
  // Order Type Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: colors.overlay,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomSheet: {
//     backgroundColor: colors.white,
//     borderRadius: 20,
//     width: width * 0.9,
//     maxHeight: height * 0.8,
//     paddingBottom: 20,
//   },
    modalOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end', // 👈 pushes sheet to bottom
    alignItems: 'center',       // still centers horizontally
    },
    bottomSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,   // 👈 only top corners rounded
    width: '100%',              // full width like native sheets
    maxHeight: height * 0.8,
    // height: height * 0.8,
    paddingBottom: 20,
    },
  bottomSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  closeButton: {
    fontSize: 24,
    color: colors.gray,
  },
  orderTypesList: {
    maxHeight: 600,
  },
  orderTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 11,
    margin: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  orderTypeLeft: {
    flex: 1,
    marginRight: 12,
  },
  orderTypeName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  orderTypeDesc: {
    fontSize: 12,
    color: colors.gray,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  nextButton: {
    backgroundColor: colors.primary,
    margin: 20,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  companyLogo: {
  width: 24,
  height: 24,
  marginRight: 8,
},
// section: {
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     marginBottom: 5,
//   },
//   dropdownInput: {
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 6,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   dropdownArrow: {
//     fontSize: 16,
//     color: '#888',
//     marginRight: 10,
//   },
// qtyContainer: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 6,
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     minWidth: 80,
//     justifyContent: "center",
//   },
  
//   qtyArrow: {
//     fontSize: 14,
//     color: "#888",
//   },
});