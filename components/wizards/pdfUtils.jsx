import { Page, Text, Svg, Document, Rect, StyleSheet } from '@react-pdf/renderer';

// Create PDF styles
const styles = StyleSheet.create({
    page: {
        padding: 60,
    },
    rect: {
        stroke: "black",
        rx: "5",
        ry: "5"
    }
});

export const PDFDocument = ({ state }) => (
    <Document>
        <Page style={styles.page} size="A4">
            <Svg viewBox="0 0 190 200">
                <>
                    <Text style={{ x: 2, y: 7, fontSize: 7.5 }}>
                        {`EDA Date: ${state.generic.edaDate}`}
                    </Text>
                </>
                <>
                    <Rect y="10" width="25%" height="10" style={styles.rect} />
                    <Text style={{ x: 2, y: 17, fontSize: 7.5 }}>
                        {`${state.ticket.number}`}
                    </Text>
                    <Rect x="55" y="10" width="70%" height="10" style={styles.rect} />
                    <Text style={{ x: 60, y: 17, fontSize: 7.5 }}>
                        {`${state.ticket.title}`}
                    </Text>
                    <Rect y="25" width="100%" height="60" style={styles.rect} />
                    <Text style={{ x: 5, y: 35, fontSize: 6 }}>
                        {`${state.ticket.description}`}
                    </Text>
                </>
                <>
                    <Text style={{ x: 2, y: 100, fontSize: 9 }}>
                        EDA Report
                    </Text>
                </>
            </Svg>
        </Page>
    </Document>
);