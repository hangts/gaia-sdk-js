import {BaseTest} from './basetest';
import * as types from '../src/types';

describe('Distribution Tests', () => {
    let timeOut = 9999;
    describe('Query', () => {
        test(
            'query Params',
            async () => {
                await BaseTest.getClient().distribution
                    .queryParams()
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Outstanding Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorOutstandingRewards('cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t')
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Commission',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorCommission('cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t')
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Slashes',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorSlashes(
                        'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',

                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegation Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegationRewards(
                        'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',
                        'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegation Total Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegationTotalRewards(
                        'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj'
                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegator Validators',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegatorValidators(
                        'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegator Withdraw Address',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegatorWithdrawAddress(
                        'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Community Pool',
            async () => {
                await BaseTest.getClient().distribution
                    .queryCommunityPool()
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
        
    });

    describe('withdraw Validator Commission', () => {
        test(
            'withdraw Validator Commission',
            async () => {
                await BaseTest.getClient().distribution
                    .withdrawValidatorCommission('cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t', BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('fund Community Pool', () => {
        test(
            'fund Community Pool',
            async () => {
                const amount: types.Coin[] = [
                    {
                        denom: 'ubig',
                        amount: '1',
                    },
                ];
                await BaseTest.getClient().distribution
                    .fundCommunityPool(amount, BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('Set Withdraw Address', () => {
        test(
            'set withdraw address',
            async () => {
                await BaseTest.getClient().distribution
                    .setWithdrawAddr('cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj', BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeOut
        );
    });

    describe('Withdraw Rewards', () => {
        test(
            'withdraw delegation rewards from a specified validator',
            async () => {

                await BaseTest.getClient()
                    .distribution.withdrawRewards(
                        'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',
                        BaseTest.baseTx,
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeOut
        );
    });
});
