import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { TabBar } from 'antd-mobile';

function renderContent(pageText) {
    return (
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        </div>
    );
}
function IndexPage({ dispatch, fullScreen, selectedTab, hidden }) {

    return (
        <div class="main" style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#191919"
                hidden={hidden}
            >
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div className={styles.tab_main}
                    />
                    }
                    selectedIcon={<div className={styles.tab_main_c}
                    />
                    }
                    selected={selectedTab === 'main'}
                    onPress={() => {
                        dispatch({
                            type: 'main/changeTabBar',
                            payload: { selectedTab: 'main' },
                        })
                    }}
                    data-seed="logId"
                >
                    {renderContent('Life')}
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div className={styles.tab_ask}
                        />
                    }
                    selectedIcon={
                        <div className={styles.tab_ask_c}
                        />
                    }
                    title="Koubei"
                    key="Koubei"
                    selected={selectedTab === 'ask'}
                    onPress={() => {
                        dispatch({
                            type: 'main/changeTabBar',
                            payload: { selectedTab: 'ask' },
                        })
                    }}
                    data-seed="logId1"
                >
                    {renderContent('Koubei')}
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div className={styles.tab_pic}
                        />
                    }
                    selectedIcon={
                        <div className={styles.tab_pic_c}
                        />
                    }
                    title="Friend"
                    key="Friend"
                    selected={selectedTab === 'pic'}
                    onPress={() => {
                        dispatch({
                            type: 'main/changeTabBar',
                            payload: { selectedTab: 'pic' },
                        })
                    }}
                >
                    {renderContent('Friend')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: require('../../assets/Profile.png') }}
                    selectedIcon={{ uri: require('../../assets/Profile-c.png') }}
                    title="My"
                    key="my"
                    selected={selectedTab === 'my'}
                    onPress={() => {
                        dispatch({
                            type: 'main/changeTabBar',
                            payload: { selectedTab: 'my' },
                        })
                    }}
                >
                    {renderContent('My')}
                </TabBar.Item>
            </TabBar>
        </div>
    );
}

IndexPage.propTypes = {
};
function mapStateToProps(state) {
    const { selectedTab, hidden } = state.main;
    return {
        selectedTab, hidden
    };
}
export default connect(mapStateToProps)(IndexPage);
