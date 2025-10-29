import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

// Create PDF styles
const styles = StyleSheet.create({
    page: {
        padding: 40,
    },
    textExtraLarge: {
        marginBottom: 20,
        fontSize: 20
    },
    textLarge: {
        marginBottom: 10,
        fontSize: 10
    },
    textSmall: {
        marginBottom: 20,
        fontSize: 8
    }
});

export const PDFDocument = ({ state }) => (
    <Document>
        <Page style={styles.page} size="A4">
            <View>
                <Text style={{ ...styles.textLarge, marginBottom: 20 }}>
                    {`EDA Date: ${moment(state.generic.edaDate).format('LL')}`}
                </Text>
                <Text style={styles.textExtraLarge}>
                    {`${state.ticket.number} : ${state.ticket.title}`}
                </Text>
                <Text style={styles.textLarge}>
                    {`${state.ticket.description}`}
                </Text>
            </View>
        </Page>
        <Page style={styles.page} size="A4">
            <View>
                <Text style={styles.textLarge}>
                    What triggered the problem?
                </Text>
                <Text style={styles.textSmall}>
                    {state.whys.trigger}
                </Text>
                <Text style={styles.textLarge}>
                    Why only this customer and why now?
                </Text>
                <Text style={styles.textSmall}>
                    {state.whys.whyThisCustomer}
                </Text>
                {
                    state.whys.whys.map((why, index) => (
                        <>
                            <Text style={styles.textLarge}>
                                {`Why this issue occured? (${index + 1})`}
                            </Text>
                            <Text style={styles.textSmall}>
                                {why.text}
                            </Text>
                        </>
                    )
                    )
                }
            </View>
        </Page>
        <Page style={styles.page} size="A4">
            <View>
                <Text style={styles.textLarge}>
                    What was the fix?
                </Text>
                <Text style={styles.textSmall}>
                    {state.takeAways.fix}
                </Text>
                <Text style={styles.textLarge}>
                    Source of Introduction?
                </Text>
                <Text style={styles.textSmall}>
                    {state.takeAways.introductionSource}
                </Text>
                <Text style={styles.textLarge}>
                    In what phase we should have caught it?
                </Text>
                <Text style={styles.textSmall}>
                    {state.takeAways.phase}
                </Text>
                <Text style={styles.textLarge}>
                    How do we ensure that such bugs don't happen in future?
                </Text>
                <Text style={styles.textSmall}>
                    {state.takeAways.futureBugs}
                </Text>
                <Text style={styles.textLarge}>
                    How do we ensure that all such bugs are addressed?
                </Text>
                <Text style={styles.textSmall}>
                    {state.takeAways.allBugsAddressed}
                </Text>
            </View>
        </Page>
    </Document>
);