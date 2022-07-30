import { Fragment, useEffect, useState } from 'react';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import PropTypes from 'prop-types';
import { AiOutlineContainer } from 'react-icons/ai';
import { getDevPost, getMediumPost } from '@arifszn/blog-js';
import { formatDistance } from 'date-fns';


const CompanyProject = ({ }) => {

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div
              className={`card compact bg-gradient-to-br to-base-200 from-base-100 shadow bg-base-100 shadow-lg`}
            >
              <div className="card-body">
                <div className="mx-3 mb-2">
                  <h5 className="card-title">
                    <span className="text-base-content opacity-70">
                      Company Projects
                    </span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6">


                    {/* 프로젝트 설명 시작*/}
                    <div className="p-8 h-full w-full">
                      <div className="flex items-center flex-col md:flex-row">
                        <div className="w-full">
                          <div className="flex items-start px-4">
                            <div className="text-center md:text-left w-full">
                              <h2 className="font-semibold text-base-content opacity-60">
                                2022.04 ~  파주 LGD MES Project
                              </h2>
                              <p className="text-base-content opacity-50 text-xs">
                              </p>
                              <br></br>
                              Server Side
                              <ul>
                                <li>Cpp를 활용한 MES Server 개발 - 공장 자동화 시나리오</li>
                              </ul>
                              <p className="mt-3 text-base-content text-opacity-60 text-sm">
                              </p>
                              <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Cpp
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Oracle
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                tibrv
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                svn
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 프로젝트 설명 끝*/}


                    {/* 프로젝트 설명 시작*/}
                    <div className="p-8 h-full w-full">
                      <div className="flex items-center flex-col md:flex-row">
                        <div className="w-full">
                          <div className="flex items-start px-4">
                            <div className="text-center md:text-left w-full">
                              <h2 className="font-semibold text-base-content opacity-60">
                                2020.10 ~ 2021.09 長沙 changesha HKC MES Project
                              </h2>
                              <p className="text-base-content opacity-50 text-xs">
                              </p>
                              <br></br>
                              Server Side
                              <ul>
                                <li>Java를 활용한 MES Server 개발 - 공장 자동화 시나리오</li>
                                <li>db 테이블 설계 및 SQL</li>
                              </ul>
                              <br></br>
                              Client Side
                              <ul>
                                <li>winform 을 활용한 MES clinet 개발 - 기준정보 설정 및 history 조회기능</li>
                                <li>wpf 을 활용한 FMC clinet 개발 - 실시간으로 서버의 응답을 받아 설비의 상태 확인 시스템</li>
                              </ul>
                              <br></br>
                              기타
                              <ul>
                                <li>트러블 슈팅 : ap log ,db history, oracle AWR 분석</li>
                                <li>mantis 관리자 및 프로젝트 이슈 confluence 기록</li>
                                <li>고객과 직접 소통 요구사항 분석</li>
                                <li>1일 트랜잭션 200만건 ~ 300만건</li>
                                <li>op-premise 환경</li>
                                <li>중국 창사</li>
                              </ul>
                              <p className="mt-3 text-base-content text-opacity-60 text-sm">
                              </p>
                              <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Java
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                C#
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Oracle
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                tibrv
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                infragistic
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                mantis
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                svn
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 프로젝트 설명 끝*/}

                    {/* 프로젝트 설명 시작*/}
                    <div className="p-8 h-full w-full">
                      <div className="flex items-center flex-col md:flex-row">
                        <div className="w-full">
                          <div className="flex items-start px-4">
                            <div className="text-center md:text-left w-full">
                              <h2 className="font-semibold text-base-content opacity-60">
                              2019.09 ~ 2020.09 ShangHai EDO MES Project Warranty
                              </h2>
                              <p className="text-base-content opacity-50 text-xs">
                              </p>
                              <br></br>
                              Server Side
                              <ul>
                                <li>Java를 활용한 MES Server 개발 - 공장 자동화 시나리오</li>
                                <li>db 테이블 설계 및 SQL</li>
                              </ul>
                              <br></br>
                              Client Side
                              <ul>
                                <li>winform 을 활용한 MES clinet 개발 - 기준정보 설정 및 history 조회기능</li>
                                <li>wpf 을 활용한 FMC clinet 개발 - 실시간으로 서버의 응답을 받아 설비의 상태 확인 시스템</li>
                              </ul>
                              <br></br>
                              기타
                              <ul>
                                <li>트러블 슈팅 : ap log ,GC Log, db history, oracle AWR 분석</li>
                                <li>mantis 관리자 및 프로젝트 이슈 confluence 기록</li>
                                <li>고객과 직접 소통 요구사항 분석</li>
                                <li>1일 트랜잭션 200만건 ~ 300만건</li>
                                <li>op-premise 환경</li>
                                <li>중국 상해</li>
                              </ul>
                              <p className="mt-3 text-base-content text-opacity-60 text-sm">
                              </p>
                              <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Java
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                C#
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Oracle
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                tibrv
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                infragistic
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                mantis
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                svn
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 프로젝트 설명 끝*/}

                    {/* 프로젝트 설명 시작*/}
                    <div className="p-8 h-full w-full">
                      <div className="flex items-center flex-col md:flex-row">
                        <div className="w-full">
                          <div className="flex items-start px-4">
                            <div className="text-center md:text-left w-full">
                              <h2 className="font-semibold text-base-content opacity-60">
                              2018.05 ~ 2019.09 ShangHai EDO MES Project
                              </h2>
                              <p className="text-base-content opacity-50 text-xs">
                              </p>
                              <br></br>
                              Server Side
                              <ul>
                                <li>Java를 활용한 MES Server 개발 - 공장 자동화 시나리오</li>
                                <li>db 테이블 설계 및 SQL</li>
                              </ul>
                              <br></br>
                              Client Side
                              <ul>
                                <li>winform 을 활용한 MES clinet 개발 - 기준정보 설정 및 history 조회기능</li>
                                <li>wpf 을 활용한 FMC clinet 개발 - 실시간으로 서버의 응답을 받아 설비의 상태 확인 시스템</li>
                              </ul>
                              <br></br>
                              기타
                              <ul>
                                <li>트러블 슈팅 : ap log ,GC Log, db history, oracle AWR 분석</li>
                                <li>mantis 관리자 및 프로젝트 이슈 confluence 기록</li>
                                <li>고객과 직접 소통 요구사항 분석</li>
                                <li>1일 트랜잭션 200만건 ~ 300만건</li>
                                <li>op-premise 환경</li>
                                <li>중국 상해</li>
                              </ul>
                              <p className="mt-3 text-base-content text-opacity-60 text-sm">
                              </p>
                              <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Java
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                C#
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                Oracle
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                tibrv
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                infragistic
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                mantis
                                </div>
                                <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                                svn
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 프로젝트 설명 끝*/}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CompanyProject.propTypes = {
  loading: PropTypes.bool.isRequired,
  blog: PropTypes.object.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default CompanyProject;
