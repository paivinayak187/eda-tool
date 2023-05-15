import { Page, Text, View, Document, Path, StyleSheet } from '@react-pdf/renderer';

// Create PDF styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    }
});

export const PDFDocument = ({ state }) => (
    <Document>
        <Page>
            <View>
                <Path d="M50 50 H150 V100 H50 Z" stroke="black" />
                <Text style={{ position: 'absolute', top: 75, left: 75 }}>
                    Sample Text
                </Text>
                <Text>{`${state.ticket.number}`}</Text>
                <Text>{`${state.ticket.title}`}</Text>
            </View>
        </Page>
    </Document>
);