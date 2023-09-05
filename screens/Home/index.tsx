import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export function Home() {

    const [scoreUs, setScoreUs] = useState(0);
    const [scoreThey, setScoreThey] = useState(0);

    function handleAddScoreUs() {
        setScoreUs(scoreUs + 1);
    }

    function handleDecScoreUs() {
        setScoreUs(scoreUs - 1);
    }

    function handleAddScoreThey() {
        setScoreThey(scoreThey + 1);
    }

    function handleDecScoreThey() {
        setScoreThey(scoreThey - 1);
    }

    function handleResetScore() {
        setScoreUs(0);
        setScoreThey(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MARCADOR DE TRUCO</Text>
            <View style={styles.scoreboard}>
                <View style={styles.teamUs}>
                    <Text style={styles.titleUs}>NÓS</Text>
                    <Text style={[styles.scoreUs, scoreUs < 10 && styles.scorePadding]}>{scoreUs}</Text>
                </View>
                <View style={styles.teamThey}>
                    <Text style={styles.titleThey}>ELES</Text>
                    <Text style={[styles.scoreThey, scoreThey < 10 && styles.scorePadding]}>{scoreThey}</Text>
                </View>
            </View>
            <View>
                <View style={styles.buttons}>
                    <View>
                        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddScoreUs}>
                            <Text style={styles.textButton}>+1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDec} onPress={handleDecScoreUs}>
                            <Text style={styles.textButton}>-1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsThey}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddScoreThey}>
                            <Text style={styles.textButton}>+1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDec} onPress={handleDecScoreThey}>
                            <Text style={styles.textButton}>-1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonReset} onPress={handleResetScore}>
                    <Text style={styles.textButton}>Zerar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}