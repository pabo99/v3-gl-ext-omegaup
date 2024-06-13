<template>
    <form>
        <div class="row">
            <div class="col">
                <label for="inputTimeLimit">Time Limit</label>
                <!-- id-lint off -->
                <input
                    id="inputTimeLimit"
                    v-model="timeLimit"
                    class="form-control"
                    max="5.0"
                    min="0.1"
                    step="0.1"
                    type="number"
                />
                <!-- id-lint on -->
            </div>
            <div class="col">
                <label for="inputOverallWallTimeLimit">Overall Wall Time Limit</label>
                <!-- id-lint off -->
                <input
                    id="inputOverallWallTimeLimit"
                    v-model="overallWallTimeLimit"
                    class="form-control"
                    max="5.0"
                    min="0.1"
                    step="0.1"
                    type="number"
                />
                <!-- id-lint on -->
            </div>
            <div class="col">
                <label for="inputExtraWallTime">Extra Wall Time</label>
                <!-- id-lint off -->
                <input
                    id="inputExtraWallTime"
                    v-model="extraWallTime"
                    class="form-control"
                    max="5.0"
                    min="0.0"
                    step="0.1"
                    type="number"
                />
                <!-- id-lint on -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="inputMemoryLimit">Memory Limit</label>
                <!-- id-lint off -->
                <input
                    id="inputMemoryLimit"
                    v-model="memoryLimit"
                    class="form-control"
                    max="1073741824"
                    min="33554432"
                    step="1048576"
                    type="number"
                />
                <!-- id-lint on -->
            </div>
            <div class="col">
                <label for="inputOutputLimit">Output Limit</label>
                <!-- id-lint off -->
                <input
                    id="inputOutputLimit"
                    v-model="outputLimit"
                    class="form-control"
                    max="104857600"
                    min="0"
                    step="1024"
                    type="number"
                />
                <!-- id-lint on -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="inputValidator">Validator</label>
                <!-- id-lint off -->
                <select id="inputValidator" v-model="validator" class="form-control">
                    <!-- id-lint on -->
                    <option value="custom">Custom</option>
                    <option value="literal">Literal</option>
                    <option value="token">Token</option>
                    <option value="token-caseless">Token (Caseless)</option>
                    <option value="token-numeric">Token (Numeric)</option>
                </select>
            </div>
            <div v-if="validator == 'token-numeric'" class="col">
                <label for="inputTolerance">Tolerance</label>
                <!-- id-lint off -->
                <input
                    id="inputTolerance"
                    v-model="tolerance"
                    class="form-control"
                    max="1"
                    min="0"
                    type="number"
                />
                <!-- id-lint on -->
            </div>
            <div v-if="validator == 'custom'" class="col">
                <label for="inputValidatorLanguage">Language</label>
                <!-- id-lint off -->
                <select
                    id="inputValidatorLanguage"
                    v-model="validatorLanguage"
                    class="form-control"
                >
                    <!-- id-lint on -->
                    <option value="cpp17-gcc">C++17</option>
                    <option value="py3">Python 3.6</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="inputInteractive">Interactive</label>
                <!-- id-lint off -->
                <select id="inputInteractive" v-model="interactive" class="form-control">
                    <!-- id-lint on -->
                    <option :value="false">No</option>
                    <option :value="true">Yes</option>
                </select>
            </div>
            <div v-if="interactive" class="col">
                <label for="inputInteractiveModuleName">Module Name</label>
                <!-- id-lint off -->
                <input
                    id="inputInteractiveModuleName"
                    v-model="interactiveModuleName"
                    class="form-control"
                />
                <!-- id-lint on -->
            </div>
            <div v-if="interactive" class="col">
                <label for="inputInteractiveLanguage">Language</label>
                <!-- id-lint off -->
                <select
                    id="inputInteractiveLanguage"
                    v-model="interactiveLanguage"
                    class="form-control"
                >
                    <!-- id-lint on -->
                    <option value="cpp17-gcc">C++17</option>
                    <option value="py3">Python</option>
                </select>
            </div>
        </div>
    </form>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        /*store: {
      type: Object,
      required: true,
    },
    storeMapping: {
      type: Object,
      required: true,
    },*/
    },
    setup(props) {
        const timeLimit = computed({
            get() {
                return 1;
            },
            set(value) {
                return;
            }
        });

        const overallWallTimeLimit = computed({
            get() {
                return 5;
            },
            set(value) {
                return;
            }
        });

        const extraWallTime = computed({
            get() {
                return 0;
            },
            set(value) {
                return;
            }
        });

        const memoryLimit = computed({
            get() {
                return 67108864;
            },
            set(value) {
                return;
            }
        });

        const outputLimit = computed({
            get() {
                return 10240;
            },
            set(value) {
                return;
            }
        });

        const validator = computed({
            get() {
                return 'custom';
            },
            set(value) {
                return;
            }
        });

        const tolerance = computed({
            get() {
                return 1;
            },
            set(value) {
                return;
            }
        });

        const validatorLanguage = computed({
            get() {
                return 'py3';
            },
            set(value) {
                return;
            }
        });

        const interactive = computed({
            get() {
                return true;
            },
            set(value) {
                return;
            }
        });

        const interactiveLanguage = computed({
            get() {
                return 'cpp17-gcc';
            },
            set(value) {
                return;
            }
        });

        const interactiveModuleName = computed({
            get() {
                return 'sumas';
            },
            set(value) {
                return;
            }
        });

        return {
            timeLimit,
            overallWallTimeLimit,
            extraWallTime,
            memoryLimit,
            outputLimit,
            validator,
            tolerance,
            validatorLanguage,
            interactive,
            interactiveLanguage,
            interactiveModuleName
        };
    }
};
</script>
